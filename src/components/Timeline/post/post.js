import React, {useEffect, useRef} from 'react';
import Header from "./header";
import Image from "./image";
import Actions from "./actions";
import Footer from "./footer";
import Comment from "./comment";

const Post = ({photo}) => {

    const commentInput = useRef();
    const handleRef = () => {
        commentInput.current.focus()
    }
    return (
        <div className='mb-10'>
            <Header username={photo.username}/>
            <Image docId={photo.user.docId} imgSrc={photo.user.imageSrc} />
            <Actions content={photo} method={handleRef}/>
            <Footer caption={photo.user.caption} username={photo.username}/>
            <Comment cmntRef={commentInput} posted={photo.user.dateCreated} post={photo} comments={photo.user.comments}/>
        </div>
    );
};

export default Post;