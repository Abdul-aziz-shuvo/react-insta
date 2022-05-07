import React, {useEffect} from 'react';
import Header from "./header";

const Post = ({children}) => {


    return (
        <div className='mb-10'>
            {children}
        </div>
    );
};

export default Post;