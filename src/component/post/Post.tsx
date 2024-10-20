import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from "./Post.module.css";

type IProps = {
    post:IPost
}
const Post:FC<IProps> = ({post}) => {
    return (
        <div className={styles.blocSpan}>
            <span className={styles.bloc}>{post.title}</span>
            </div>
    );
};

export default Post;