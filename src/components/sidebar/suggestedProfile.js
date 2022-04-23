import React, {useEffect, useState} from 'react';
import {updateFollowedUserFollower, updateLoggedInUserFollowing} from "../../services/firebase";

const SuggestedProfile = (props) => {
    const [followed,setFollowed] = useState(null);
    const  followUser = async () => {
        //update loggedIn user following array with following profile id
       await updateLoggedInUserFollowing(props.loggedInUserDocId,props.profileId);
       //update followed user followers  array with loggedIn User id
       await updateFollowedUserFollower(props.userId,props.spDocId);
       setFollowed(true)
    }

    useEffect(() => {
        console.log(props)
    },[])
    return (

            !followed ?

        <div className='flex flex-row justify-between  h-16  w-52 m-2  items-center'>
          <div className='flex justify-between'>
              <img src={`/images/avatars/${props.username}.jpg`} className='w-8 h-8 rounded-full' alt=""/>
              <div className='ml-3'>{props.username}</div>
          </div>
            <div className='items-start'>
                <button className='bg-blue-500 rounded text-white p-1' onClick={followUser}>Follow</button>
            </div>
        </div>
                :
                null

    );
};

export default SuggestedProfile;