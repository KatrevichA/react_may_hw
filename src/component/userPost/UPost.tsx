import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
type IProps ={
    post:IPost
}
const UPost:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>{post.userId} - {post.title}</div>
        </div>
    );
};

export default UPost;