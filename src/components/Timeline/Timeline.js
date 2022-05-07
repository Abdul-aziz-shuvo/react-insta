import React, {useEffect, useRef} from 'react';
import usePhotos from '../../hooks/usePhotos'
import Skeleton from "react-loading-skeleton";
import Post from "./post/post";
import Header from "./post/header";
import Image from "./post/image";
import Actions from "./post/actions";
import Footer from "./post/footer";
import Comment from "./post/comment";

const Timeline = () => {
    const photos = usePhotos()
    const commentInput = useRef();
    const handleRef = () => {
        commentInput.current.focus()
    }
    useEffect(() => {
        console.log(photos)
    },[photos])
    return (
        <div className=' container md:grid-cols-2
          grid-cols-1'>
            {
               !photos  ? (
                    <Skeleton count={4} width={600} height={300}>

                    </Skeleton>
                )
                    :
                    photos.length > 0 ?
                    photos.map((photo) => {
                        return (
                            <Post>
                                <Header username={photo.username}/>
                                <Image docId={photo.user.docId} imgSrc={photo.user.imageSrc} />
                                <Actions content={photo} method={handleRef}/>
                                <Footer caption={photo.user.caption} username={photo.username}/>
                                <Comment cmntRef={commentInput} comments={photo.user.comments}/>
                            </Post>
                        )
                    })
                        :
                        <div>Follow someone to see some posts</div>


            }
        </div>
    );
};

export default Timeline;