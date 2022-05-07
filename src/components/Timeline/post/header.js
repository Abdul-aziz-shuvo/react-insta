import React from 'react';
import {Link} from "react-router-dom";

const Header = ({username}) => {
    return (

        <div className='border rounded bg-white w-full h-10 flex items-center p-2 '>
            <Link to={`/p/${username}`}>
                <div className='flex items-center gap-2'>
                    <div>
                    <img src={`/images/avatars/${username}.jpg`}  className='rounded-full  h-8' alt=""/>
                    </div>
                    <div >
                        {username}
                    </div>
                </div>


            </Link>
        </div>
    );
};

export default Header;