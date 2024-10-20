import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import UPost from "./UPost";
type IProps ={
    posts: IPost[]
}
const UserPost:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <UPost key={value.id} post={value}/>)
            }
        </div>
    );
};

export default UserPost;