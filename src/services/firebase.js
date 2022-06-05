
import {FieldValue, firebase} from "../lib/firebase";

export async function doesUsernameExist(username){
    const result = await firebase.firestore().collection('users')
        .where('username','==',username).get()
    return result.docs.map((user) => (user.data.length > 0 ))
}
export async function getUserByUserName(username){
    const result = await firebase.firestore().collection('users')
        .where('username','==',username).get()
    return result.docs.map((user) => ({
        ...user.data(),
        docId : user.id
    } ))
}
export async function getFirebaseUserByUserId(userId){
    const result = await firebase.firestore().collection('users')
        .where('userId','==',userId).get()

    const user =  result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))


   return user
}
export async function getSuggestedUser(userId,following){
    const result = await firebase.firestore().collection('users')
        .limit(10).get()

   return result.docs.
   map((user) => ({...user.data(),docId: user.id}))
  .filter((profile)=> (profile.userId !== userId && !following.includes(profile.userId)))
}
export async function updateLoggedInUserFollowing(loggedInUserDocId,profileId){
    return await firebase.firestore().collection('users')
        .doc(loggedInUserDocId).update({
            following : FieldValue.arrayUnion(profileId)
        })
}
export async function updateFollowedUserFollower(userId,profileDocId){
    return await firebase.firestore().collection('users')
        .doc(profileDocId).update({
            followers : FieldValue.arrayUnion(userId)
        })
}
export async function getUserPhotoByUserName(username){
    const [user] = await getUserByUserName(username)
    const result =  await firebase.firestore().collection('photos')
        .where('userId','==',user.userId).get()
   return  result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))

}



export async function getPhotos(userId,following){
    const result =  await firebase.firestore().collection('photos')
        .where('userId', 'in' ,following).get()

    const userFollowedPhotos = result.docs.length > 0 && result.docs.map((photo) => ({
        ...photo.data(),
        docId : photo.id
    }))
    console.log(result)
    if(result.size > 0){
        //using promise.all here to result return as an array,otherwise it will return a promise
        const  photoUserInfo = await Promise.all(userFollowedPhotos.map(async  (photo) => {
            let username = '';
            let userLike = false;
            if(photo.likes.includes(userId)){
                userLike = true
            }

            const response =   await getFirebaseUserByUserId(photo.userId)
            username = response[0].username


            return {username,user : photo,userLike}

        }))

        return  photoUserInfo;
    }else{
        console.log('asdf')
        return 0
    }

}

export async function checkFollowedOrNot(userId,profileId){
    const response =  await firebase.firestore().collection('users')
     .where('userId','==',userId).where('following','array-contains',profileId).get()

    return  response.docs.length > 0 ? true : false
}
export async function handleFollowUnFollow(userId,userDocId,profileDocId,profileUserId){

    const result = await firebase.firestore().collection('users') .where('userId','==',userId).where('following','array-contains',profileUserId).get()
    const followExists =  result.size > 0 ? true : false

    if(followExists){
      try{
          const response =  await firebase.firestore().collection('users')
              .doc(userDocId).update({
                  following : FieldValue.arrayRemove(profileUserId)
              })
          return false
      }catch (e) {

          return true
      }

    }else{

       try{
           const response =  await firebase.firestore().collection('users')
               .doc(userDocId).update({
                   following : FieldValue.arrayUnion(profileUserId)
               })

           return  true
       }catch (e) {

            return false
       }
    }

}