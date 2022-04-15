import React, { useState, useEffect } from 'react'
import Post from '../post/Post'
import Sharepost from '../sharepost/Sharepost'
import './feed.css'
//import {Posts} from '../../testData'
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/post/timeline/624e94dc1a94895ce9bc355d")
      setPosts(res.data);    
    };
    fetchPosts();
  }, []);

  return (
    <div className='feed'>   
      <Sharepost/>
      {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
    </div>
  )
}
