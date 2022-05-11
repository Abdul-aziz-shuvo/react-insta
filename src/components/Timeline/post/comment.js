import React, {useEffect, useState} from 'react';
import useUser from '../../../hooks/useUser'
import {firebase,FieldValue} from '../../../lib/firebase'
import {formatDistance} from 'date-fns'
const Comment = ({comments,cmntRef,post,posted}) => {
    const {user} = useUser()
    const [moreComments,setMoreComments] = useState(false);
    const [comment,setComment] = useState( );
    const [Allcomments,setAllComments] = useState(comments);
    const showComments = () => {
        setMoreComments(true)
    }
    const handleComment = () => {
        cmntRef.current.value = ''
        setComment('')
        setAllComments((prev) => (
            [...prev,{
                displayName : user.username,
                comment
            }]
        ))
        firebase.firestore().collection('photos').doc(post.user.docId).update({
            comments : FieldValue.arrayUnion({
                displayName : user.username,
                comment
            })
        })
    }
    useEffect(() => {

    },[comment,Allcomments,user])
    return (
        <div className='border border-t-0'>
        <div>
           <div className='ml-2'>
               <small className='font-bold text-gray-500 cursor-pointer' onClick={() => showComments()}>view all {comments.length} comments</small>
           </div>
            <div className='p-2'>
                {
                    moreComments === false ?
                    Allcomments.slice(0,2).map((cmnt) => (
                        <div className=''>
                            <small className='font-bold'>{cmnt.displayName} </small> <small>{cmnt.comment}</small>
                        </div>
                    ))
                        :
                        Allcomments.map((cmnt) => (
                            <div className=''>
                                <small className='font-bold'>{cmnt.displayName} </small> <small>{cmnt.comment}</small>
                            </div>
                        ))
                }
                <small className='text-gray-500  '>{formatDistance(posted,new Date()).toUpperCase()} AGO</small>
            </div>

        </div>

        <div className='border   flex justify-between items-center'>
            <div className='w-full'>
                <input ref={cmntRef} type="text" placeholder='Add comment' value={comment}
                       className='p-3 w-full' onChange={({target}) => {
                    setComment(target.value)
                       }}
                       onKeyUp={(e) => (
                           e.keyCode == 13 && handleComment()
                       )}/>
            </div>
            <div className=' border-l'>
               <img src='/images/icons/send.png' className='w-10 full ' alt="" onClick={() => handleComment()}
              />
            </div>
        </div>
        </div>
    );
};

export default Comment;