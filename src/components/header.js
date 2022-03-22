import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../constants/routes'
const Header = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
            <div className="container mx-auto  max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className='flex items-center'>
                       <h1 >
                           <Link to={ROUTES.DASHBOARD}>
                               <img src="/images/logo.png" alt="" className=' w-6/12'/>
                           </Link>
                       </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;