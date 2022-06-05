import React, {useEffect, useReducer, useState} from 'react';
import {useParams} from "react-router-dom";
import {getUserByUserName, getUserPhotoByUserName} from "../../services/firebase";
import UserProfile from "./userProfile";
import Photos from "./photos";

const Index = () => {

    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
        profile: null,
        photosCollection: null,
        followerCount: 0,
        followingCount : 0
    };
    const {username} = useParams()

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const [user] = await getUserByUserName(username);
            const photos = await getUserPhotoByUserName(username);
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length,followingCount: user.following.length });

        }
        if(state.profile == null)
        getProfileInfoAndPhotos();

    }, [username,state]);


    return (
        <div className='mx-auto max-w-screen-lg'>
               <UserProfile profile={state.profile} posts={state.photosCollection} followingCount={state.followingCount} followerCount={state.followerCount} setState={dispatch}/>
                <Photos photos={state.photosCollection}/>

        </div>
    );
};

export default Index;