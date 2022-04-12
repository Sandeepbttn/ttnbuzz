import React from 'react'
import Post from '../post/Post'
import Sharepost from '../sharepost/Sharepost'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <Sharepost/>
      <Post/>
    </div>
  )
}
