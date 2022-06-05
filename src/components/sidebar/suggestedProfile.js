import React, {useEffect, useState} from 'react';
import {updateFollowedUserFollower, updateLoggedInUserFollowing} from "../../services/firebase";
import {Link} from "react-router-dom";

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

    },[])
    return (

            !followed ?

        <div className='flex flex-row justify-between  h-16  w-52 m-2  items-center'>
          <Link  to={`/p/${props.username}`} className='flex justify-between'>
              <img src={`/images/avatars/${props.username}.jpg`} className='w-8 h-8 rounded-full' alt=""/>
              <div className='ml-3'>{props.username}</div>
          </Link>
            <div className='items-start'>
                <button className='bg-blue-500 rounded text-white p-1' onClick={followUser}>Follow</button>
            </div>
        </div>
                :
                null

    );
};

export default SuggestedProfile;