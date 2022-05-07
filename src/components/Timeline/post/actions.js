import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import {FieldValue} from "../../../lib/firebase";
import useUser from '../../../hooks/useUser'
const Actions = ({content,method}) => {
    const {user} = useUser()
    const [like,setLike] = useState(false)
    const [totalLike,setTotalLike] = useState(content.user.likes.length)

    const likeHandler = (content) => {
        firebase.firestore().collection('photos').doc(content.user.docId).update({
            likes : FieldValue.arrayUnion(user.userId)
        })
        setTotalLike((state) => (
            state + 1
        ))
        setLike(true)
    }
    const disLikeHandler = (content) => {
        firebase.firestore().collection('photos').doc(content.user.docId).update({
            likes : FieldValue.arrayRemove(user.userId)
        })
        setTotalLike((state) => (
            state - 1
        ))
        setLike(false)
    }
    useEffect(async  () => {
         let photo =  await firebase.firestore().collection('photos').doc(content.user.docId).get()
         let likeExists =  photo.data().likes.includes(user?.userId)
         if(likeExists){
              setLike(true)
         }else{
              setLike(false)
         }

    },[user])

    useEffect(() =>{

    },[totalLike])

    return (
        <div className='border border-b-0'>
        <div className=' p-2 flex justify-items-start '>
            <div className=' mx-2'>
                {
                    !like ?
                        <img src={'/images/icons/heart.png'} alt="" className='w-6 h-6 cursor-pointer'
                             onClick={() =>likeHandler(content)}/>
                    :
                        <img src={'/images/icons/love.png'} alt="" onClick={() => disLikeHandler(content)} className='w-6 h-6 cursor-pointer'/>

                }
            </div>
            <div className=' mx-2'>
                <img src={'/images/icons/comment.png'} alt="" className='w-6 h-6' onClick={() => (method())}/>
            </div>
            <div className=' mx-2'>
                <img src={'/images/icons/send.png'} alt="" className='w-6 h-6'/>
            </div>
        </div>
            <div className='p-2 '>
                <small className='font-bold'>
                    {totalLike} likes
                </small>
            </div>
        </div>

    );
};

export default Actions;