import React, {useEffect, useState} from 'react';
import {getSuggestedUser} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./suggestedProfile";
const Suggestion = ({userId,following,loggedInUserDocId}) => {
    const [profile,setProfile] = useState(null)
    useEffect(  () => {
        async function suggestedProfile () {
            const response = await getSuggestedUser(userId,following);
            setProfile(response)
        }
        if(userId){
         suggestedProfile()
        }

    },[userId])
    return (

            !profile ?
                <Skeleton count={1} height={100} width={200}/> :
                    <div className='flex flex-col '>
                        <div className="flex ">
                            <div className='font-bold text-gray-400 mt-4'>
                                <small>suggestion for you</small>
                            </div>
                        </div>
                        <div className='flex flex-col '>

                        {
                            profile.map(value => (
                                    // <div className='w-52 h-16 m-3 bg-blue-800 items-center'>{value.username}</div>
                                <SuggestedProfile
                                key={value.docId}
                                spDocId={value.docId} //sp = single profile
                                username={value.username}
                                profileId={value.userId}
                                userId={userId}
                                loggedInUserDocId = {loggedInUserDocId}
                                />
                            ))
                        }
                        </div>

                    </div>





    );
};

export default Suggestion;