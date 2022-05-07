import React, {useEffect} from 'react';

const Footer = ({caption,username}) => {


    useEffect(() => {

    },[])
    return (
        <div className='border-b-0 border-t-0 border-l border-r px-2 pb-2'>

            <small><span className='font-bold'>{username}</span> {caption}</small>

        </div>
    );
};

export default Footer;