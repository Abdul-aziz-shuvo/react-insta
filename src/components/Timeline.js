import React, {useEffect} from 'react';
import usePhotos from '../hooks/usePhotos'
const Timeline = () => {
    const user = usePhotos()
    useEffect(() => {
        console.log(user)
    },[user])
    return (
        <div className='bg-stone-300 container '>
            <div className='flex flex-col'>
                {
                    user?.map((value) => (
                        <div>
                            {value.userId}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Timeline;