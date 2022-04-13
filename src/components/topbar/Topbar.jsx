import React from 'react'
import './topbar.css'
import {PersonSearch,Person,Chat} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
       <span className="logo">Buzz</span>
      </div>
      <div className="topbarCenter">
         <div className="searchbar">
             <PersonSearch className='searchIcon'/>
             <input placeholder='Search for people , friend or post' className='searchInput' />
         </div>
      </div>
      <div className="topbarRight">
      
          <div className="topbarLink">
          <img src="./assets/formal.jpeg" alt="profile picture" className='topbarImg' />
              <span className="topbarName">Sandeep Bhatt</span> 
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
            </div>
            
            
          </div>
      </div>
    </div>
  )
}

