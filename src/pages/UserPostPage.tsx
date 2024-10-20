import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getUserPosts} from "../services/api.json.service";
import UserPost from "../component/userPost/UserPost";
import {IPost} from "../models/IPost";

const UserPostPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (id) {
            getUserPosts(id).then(value =>
                // console.log(value.data)
            setPosts(value.data)
            );
        }

    }, []);


    return (
        <div>
            UserPostPage {id}
            <UserPost posts={posts}/>
            <button ><Link to={'/users'}>Turn Back</Link></button>
        </div>
    );
};

export default UserPostPage;