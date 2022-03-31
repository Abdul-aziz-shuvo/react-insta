import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";
const User = ({username,fullname}) => {

    return (

            !username || !fullname ?
            (
                <Skeleton  count={1} height={61}>

                </Skeleton>
            )
            :
            (
                <Link className=' grid grid-cols-2 gap-2'>
                    <div className=''>
                        <img src="/images/avatar.jpg" alt="" className=' w-16 h-16 rounded-full'/>

                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='font-bold'>{username}</p>
                        <p>{fullname}</p>

                    </div>
                </Link>
            )

    );
};

export default User;

User.Protypes = {
    username : PropTypes.string.isRequired,
    fullname : PropTypes.string.isRequired
}