import React, {useEffect, useState} from 'react';

const Comment = ({comments,cmntRef}) => {
    const [comment,setComment] = useState( );
    useEffect(() => {
        console.log(comments)
    },[])
    return (
        <div className='border border-t-0'>
        <div>
           <div className='ml-2'>
               <small className='font-bold text-gray-500'>view all {comments.length} comments</small>
           </div>
            <div className='p-2'>
                {
                    comments.map((cmnt) => (
                        <div className=''>
                            <small className='font-bold'>{cmnt.displayName} </small> <small>{cmnt.comment}</small>
                        </div>
                    ))
                }
            </div>

        </div>

        <div className='border  flex justify-between items-center'>
            <div className='w-full'>
                <input ref={cmntRef} type="text" placeholder='Add comment' value={comment}
                       className='p-3 w-full' onChange={({target}) => { setComment(target.value)}}/>
            </div>
            <div className='p-1'>
               <img src='/images/icons/send.png' className='w-6 h-6 ' alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Comment;