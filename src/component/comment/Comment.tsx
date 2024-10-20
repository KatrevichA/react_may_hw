import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
type IProps = {
    comment:IComment
}
const Comment:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.name}
        </div>
    );
};

export default Comment;