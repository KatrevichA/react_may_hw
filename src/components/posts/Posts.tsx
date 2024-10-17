import React, {FC} from 'react';
import {IPost} from "../../models/post/IPost";
import Post from "../post/Post";
type IProps ={
    posts:IPost[]
}
const Posts:FC <IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }

        </div>
    );
};

export default Posts;