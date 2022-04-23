
import {FieldValue, firebase} from "../lib/firebase";

export async function doesUsernameExist(username){
    const result = await firebase.firestore().collection('users')
        .where('username','==',username).get()
    return result.docs.map((user) => (user.data.length > 0 ))
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

   return result.docs.map((user) => ({...user.data(),docId: user.id}))
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
export async function getPhotos(userId,following){
    const result =  await firebase.firestore().collection('photos')
        .where('userId', 'in' ,following).get()

    const userFollowedPhotos = result.docs.length > 0 && result.docs.map((photo) => ({
        ...photo.data(),
        docId : photo.id
    }))
    return userFollowedPhotos;
}