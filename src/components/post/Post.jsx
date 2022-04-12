import React from 'react'
import "./post.css"

import { MoreVert ,ThumbUp,ThumbDown,AddComment} from '@mui/icons-material'
import { Users } from "../../dummyData";
// import { useState } from "react";


export default function Post() {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <span className="postUsername">
            Sandeep Bhatt
          </span>
          <span className="postDate">12.4.22</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">hello my first post</span>
        <img className="postImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="post image" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <ThumbUp className="likeIcon"/>
          <span className="postLikeCounter"> 41</span>
          <ThumbDown className="likeIcon"/>
          <span className="postLikeCounter"> 21</span>
          
        </div>
        <div className="postBottomRight">
          <span className="postCommentCount"> 3 comments</span>
        </div>
      </div>
      <div className="postLikeDislike">
          <div className="postThumbup"><ThumbUp /><p>Like</p></div>
          <div className="postThumbDown"><ThumbDown/><p>Dislike</p></div>
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
