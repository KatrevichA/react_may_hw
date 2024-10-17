import React, {FC} from 'react';
import {IPost} from "../../models/post/IPost";
type IProps = {
    post:IPost
}
const Post:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>postUser - {post.userId} - {post.title}</div>

        </div>
    );
};

export default Post;