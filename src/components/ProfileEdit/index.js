import React, {useState} from 'react';
import ProfileTab from "./profileTab";

const Index = () => {
    const [tab,setTab] = useState('profile')
    const handleTab = (value) => {
            setTab(value)
    }
    return (
        <div className='mx-auto max-w-screen-lg border h-96 '>
           <div className='flex h-full'>
                <div className={'w-1/5 border-r'}>
                  <div className='flex flex-col '>

                      <button  onClick={() => handleTab('profile')} className={'border-b'}>
                          <p  className='p-2'>
                              Profile
                          </p>
                      </button>

                      <button  onClick={() => handleTab('password')} className={'border-b'}>
                          <p  className='p-2'>
                              Password
                          </p>
                      </button>
                  </div>
                </div>

               <div className={'w-4/5 p-3'}>
                   <div  className={tab !== 'profile' && 'hidden'}>
                       <ProfileTab />
                   </div>

                   <div  className={tab !== 'password' && 'hidden'}>
                     asdfasfasdf
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Index;