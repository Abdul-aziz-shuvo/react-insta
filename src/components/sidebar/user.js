import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";
import Sidebar from "./index";
const User = ({username,fullname}) => {

    return (

            !username || !fullname ?
            (
                <Skeleton  count={1} height={61}>

                </Skeleton>
            )
            :
            (
                <Link to={`/p/${username}`} className=' grid grid-cols-4 gap-2'>
                    <div className=''>
                        <img src="/images/avatar.jpg" alt="" className=' w-14 h-14 rounded-full'/>

                    </div>
                    <div className='flex flex-col '>
                        <p className='font-bold '>{username}</p>
                        <small className='text-gray-500'>{fullname}</small>

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