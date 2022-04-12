import React from 'react'
import Post from '../post/Post'
import Sharepost from '../sharepost/Sharepost'
import './feed.css'
import {Posts} from '../../testData'

export default function Feed() {
  return (
    <div className='feed'>
      <Sharepost/>
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </div>
  )
}
