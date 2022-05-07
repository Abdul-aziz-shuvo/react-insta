import React from 'react';

const Image = ({docId,imgSrc}) => {
    return (
        <div>
            <img src={imgSrc} alt="" className='w-full h-full'/>
        </div>
    );
};

export default Image;