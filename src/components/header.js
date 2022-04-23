import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../constants/routes'
import FirebaseContext from "../context/firebase";
import UserContext, {useAuth} from "../context/userContext";
const Header = () => {
     // const {firebase} =  useContext(FirebaseContext)
     // const {user} =  useContext(UserContext)
   const {logOut,user}  =  useAuth()

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8 w-full">
            <div className="container mx-auto  max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className='flex items-center'>
                       <h1 >
                           <Link to={ROUTES.DASHBOARD}>
                               <img src="/images/logo.png" alt="" className=' w-6/12'/>
                           </Link>
                       </h1>
                    </div>
                    <div className='flex items-center'>
                        { user !== null ?
                            <>
                            <Link to={ROUTES.DASHBOARD}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                            </Link>
                            <button type='button' onClick={() => logOut()}
                                    onKeyDown={
                                (event) =>
                                  event.key === 13 && logOut()
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>

                              <div className='d-flex items-center'>
                                  <Link to={`/p/${user?.username}`}>
                                      <img src={`/images/avatars/${user?.username}.jpg`} alt=""/>
                                  </Link>
                              </div>

                            </>

                            :
                            <div className='d-flex'>

                                    <Link to={ROUTES.LOGIN}>
                                        <button className='bg-blue-400 rounded py-1 px-4 text-white mr-3'>Log In</button>
                                    </Link>


                                   <Link to={ROUTES.SIGN_UP}>
                                       <button>Sign Up</button>
                                   </Link>

                            </div>

                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;