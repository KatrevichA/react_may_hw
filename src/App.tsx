import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./models/post/IPost";
import Posts from "./components/posts/Posts";
import {getPosts} from "./services/api.service";

const App:FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    const lift1 = async (id:number) =>{
        setPosts(await getPosts(id))
    };

  return (
    <div className="App">

        <hr/>
        ......................
        <Posts posts={posts}/>
        <hr/>

      <Users lift2={lift1}></Users>

    </div>
  );
}

export default App;
