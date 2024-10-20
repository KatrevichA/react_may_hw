import React, {useEffect, useState} from 'react';
import Posts from "../component/posts/Posts";
import {getPosts} from "../services/api.json.service";
import {IPost} from "../models/IPost";

const PostsPage = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then(value =>
            // console.log(value)
        setPosts(value)
        );
    }, []);

    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;