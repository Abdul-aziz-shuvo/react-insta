import React, {useEffect} from 'react';



const Photos = ({photos}) => {
    useEffect(() => {
        console.log(photos)
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 place-content-stretch mt-5'>
            {
                photos !== null &&
                photos.map((photo) => (
                    <div >
                        <div key={photo.docId} className="relative group">
                            <img src={photo.imageSrc} alt={photo.caption} />

                            <div className="absolute bottom-0 left-0 bg-gray-600 z-10 w-full mix-blend-overlay    justify-evenly items-center h-full  group-hover:flex hidden">
                                <div className='flex justify-evenly w-full'>
                                    <div className='text-white flex'>
                                       <div className=''>
                                           <svg
                                               xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 0 20 20"
                                               fill="currentColor"
                                               className="w-8 mr-1 "
                                           >
                                               <path
                                                   fillRule="evenodd"
                                                   d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                   clipRule="evenodd"
                                               />
                                           </svg>
                                       </div>
                                      <div className='mt-1'>
                                          {photo.likes.length}
                                      </div>

                                    </div>
                                    <div className='text-white flex'>
                                        <div className=''>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-8 mr-1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className='mt-1'>
                                            {photo.comments.length}
                                        </div>

                                    </div>
                                </div>

                           </div>


                       </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Photos;