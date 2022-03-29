import React, {useState, useEffect, useContext} from 'react';
import FirebaseContext from "../context/firebase";
import {useHistory,Link} from "react-router-dom";
import * as Routes from  '../constants/routes'
import {useAuth} from "../context/userContext";

const Login = () => {
    const history = useHistory();
    // const {firebase} = useContext(FirebaseContext);
    const {signIn,errorFirebase} = useAuth();
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === "" || emailAddress === ""
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
           const result =  await signIn(emailAddress,password);
            console.log(result)
               history.push(Routes.DASHBOARD)


            // history.push(Routes.DASHBOARD)
        }catch (e) {

            setError(e.message)
        }
    }



    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen justify-items-center'>
           <div className='flex w-3/5'>
               <img src="/images/iphone-with-profile.jpg" alt="" className='max-w-full'/>
           </div>
            <div className='flex flex-col w-2/5'>
              <div className='flex justify-center w-full'>
                  <img src="/images/logo.png" alt="" className='w-5/12 mb-2'/>
              </div>

                <div>
                    {error}
                </div>

                <form onSubmit={handleLogin} method='post' className='border p-4 '>
                    <input type="text" onChange={({target}) => setEmailAddress(target.value)} placeholder='Email Address' className='text-sm w-full mr-3 px-3 py-3 border rounded mb-2'/>
                    <input type="password" onChange={({target}) => setPassword(target.value)} placeholder='password' className='text-sm w-full mr-3 px-3 py-3 border rounded mb-2'/>
                    <button className={`bg-indigo-500 w-full py-2 text-white ${isInvalid && 'opacity-50'}`} disabled={isInvalid}>
                        Login
                    </button>

                </form>

                <div className='text-sm p-4 border mt-4 '>
                    Don't have an account? <Link to="/sign-up" className='font-bold'>Sign Up</Link>
                </div>

            </div>
        </div>
);
};

export default Login;