import React, { useEffect , useState} from 'react'
import "./post.css"

import { MoreVert ,ThumbUp,ThumbDown,AddComment} from '@mui/icons-material'
//import { Users } from "../../testData";
import axios from 'axios';
//import {format} from "timeago.js";


export default function Post({ post }) {

  // like function
  const [like,setLike] = useState(post.like[0].length)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] = useState({});
         

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/user/${post.userID}`);
      setUser(res.data);
    };  
    fetchUser();
  }, [post.userID]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1) 
    setIsLiked(!isLiked)
  }

  // dislike function

  const [dislike,setDislike] = useState(post.dislike)
  const [isDisliked,setIsDisliked] = useState(false)

  const dislikeHandler =()=>{
    setDislike(isDisliked ? dislike-1 : dislike+1)
    setIsDisliked(!isDisliked)
  }

  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={user.profilePicture}
            alt=""
          />
          <span className="postUsername">
          {user.firstName} {user.lastName}
          </span>
          <span className="postDate">{post.createdAt}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.text}</span>
        <div><img className="postImg" src={post.images} /></div>
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <ThumbUp className="likeIcon"/>
          <span className="postLikeCounter"> {like}</span>
          <ThumbDown className="likeIcon"/>
          <span className="postLikeCounter">{dislike}</span>
          
        </div>
        <div className="postBottomRight">
          <span className="postCommentCount"> {post.comment}comments</span>
        </div>
      </div>
      <div className="postLikeDislike">
          <div className="postThumbup" onClick={likeHandler}><ThumbUp /><p>Like</p></div>
          <div className="postThumbDown" onClick={dislikeHandler}><ThumbDown/><p>Dislike</p></div>
          <div className="postAddComment"><AddComment/><p>Comment</p></div>
          
      </div>
      <div className="postEnd">
      <img
            className="postProfileImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
      <input placeholder='Add comment' className='postComment'/>
      </div>
    </div>
  </div>
  )
}
