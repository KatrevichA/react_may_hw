import React, {useEffect, useState} from 'react';
import {getComments} from "../services/api.json.service";
import {IComment} from "../models/IComment";
import Comments from "../component/comments/Comments";

const CommentsPage = () => {

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        getComments().then(value =>
        setComments(value));
    }, []);

    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsPage;