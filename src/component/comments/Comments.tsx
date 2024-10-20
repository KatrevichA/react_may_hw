import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";
type IProps ={
    comments:IComment[]
}
const Comments:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;