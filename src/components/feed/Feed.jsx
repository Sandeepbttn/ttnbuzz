import React, { useState, useEffect, useContext } from 'react'
import Post from '../post/Post'
import Sharepost from '../sharepost/Sharepost'
import './feed.css'
//import {Posts} from '../../testData'
import axios from "axios";
import {AuthContext} from '../../context/AuthContext';

export default function Feed({firstName}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = firstName
      ? await axios.get("http://localhost:3000/post/profile/" + firstName)
      : await axios.get("http://localhost:3000/post/timeline/" + user._id);
      setPosts(res.data);    
    };
    fetchPosts();  
  }, [firstName, user._id]);

  return (
    <div className='feed'>   
      <Sharepost/>
      {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
    </div>
  )
}

