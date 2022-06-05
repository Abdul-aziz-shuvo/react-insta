import React, {useEffect, useReducer, useState} from 'react';
import useUser from '../../hooks/useUser'
import {checkFollowedOrNot,handleFollowUnFollow} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
const UserProfile = ({profile,followingCount,followerCount,setState,posts}) => {
   const [isFollower,setFollower] = useState();
   const loggedInUser = useUser()
    const activeUser = loggedInUser?.user?.userId === profile?.userId
    const handleFollow = async () => {

        const response = await handleFollowUnFollow(loggedInUser.user.userId,loggedInUser.user.docId,profile.docId,profile.userId)
        console.log(response)
        response == false ? setFollower(false) : setFollower(true)
    }

   useEffect(() => {

        if (isFollower === undefined) {
            async function checkUserFollowThisProfile(){
                const response = await checkFollowedOrNot(loggedInUser.user.userId,profile.userId)
                response ? setFollower(true) : setFollower(false)

            }
            // eslint-disable-next-line no-unused-expressions
            Object.keys(loggedInUser).length !== 0   && profile !== null ?  checkUserFollowThisProfile() : ''
        }

   },[loggedInUser])

    useEffect(() => {
        console.log(isFollower)
    },[isFollower])
    return (

           <div className='grid md:grid-cols-2 grid-cols-2'>
               {
                   isFollower === undefined ?
                       <>
                           <div className='col-span-1 mx-auto'>
                               <Skeleton count={1} width={100} height={100} circle/>
                           </div>

                           <div className='col-span-1 self-center'>
                               <div className='flex '>
                                   <div className='self-center mx-3 '>
                                       <Skeleton count={1} width={60} height={20} />
                                   </div>
                                   <div className={'self-center mx-3 '}>
                                       <Skeleton count={1} width={80} height={35} />
                                   </div>
                               </div>

                               <div className='flex mt-2'>
                                   <div className={'self-center mx-3 '}>
                                       <Skeleton count={1} width={80} height={20}/>
                                   </div>

                                   <div className={'self-center mx-3 '}>
                                       <Skeleton count={1} width={80} height={20}/>
                                   </div>
                                   <div className={'self-center mx-3 '}>
                                       <Skeleton count={1} width={80} height={20}/>
                                   </div>
                               </div>
                           </div>
                       </>
                       :
                       <>
                           <div className='col-span-1 mx-auto'>
                               <img src={ `/images/avatars/${loggedInUser?.user?.username}.jpg`} className={'lg:w-28 w-20 rounded-full'} alt="profile"/>
                           </div>

                           <div className='col-span-1 self-center'>
                               <div className='flex '>
                                   <div className='self-center mx-3 '>
                                       {profile?.username}
                                   </div>
                                   <div className={'self-center mx-3 '}>
                                       {
                                           activeUser === false && <button className='bg-blue-800 px-4 py-1 text-white' onClick={handleFollow}><small>
                                               {
                                                   isFollower ? 'Unfollow' : 'Follow'
                                               }

                                           </small></button>
                                       }
                                   </div>
                               </div>

                               <div className='flex mt-2'>
                                   <div className={'self-center mx-3 '}>
                                       <small className='font-bold'> {posts?.length} posts</small>
                                   </div>
                                   <div className={'self-center mx-3 '}>
                                       <small className='font-bold'> {followerCount} follower</small>
                                   </div>
                                   <div className={'self-center mx-3 '}>
                                       <small className='font-bold'> {followingCount} following</small>
                                   </div>
                               </div>
                           </div>

                       </>

               }



           </div>

    );
};

export default UserProfile;