import React, {useEffect, useState} from 'react';
import {useAuth} from "../context/userContext";
import {getFirebaseUserByUserId, getPhotos} from "../services/firebase";



const UsePhotos = () => {
    const [photos,setPhotos] = useState(null)
    const {user : { uid : userId = null}} = useAuth()
        useEffect(async () => {
          const [response]  =  await getFirebaseUserByUserId(userId)

            if(response.following.length > 0){
              const  photos = await getPhotos(userId,response.following)
                setPhotos(photos)
            }
        },[userId])
    return photos;
};

export default UsePhotos;