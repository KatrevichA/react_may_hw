import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type IProps = {
    posts:IPost[]
}
const Posts:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;