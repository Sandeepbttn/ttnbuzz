import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="userMiniProfile">
        <h1>user mini profile</h1>
      </div>

      <div className="sidebarBox">
        <div className="sidebarBoxRecent">
          <h3>Recent</h3>
        </div>
        <div className="sidebarBoxGroups">
            <h3>Groups</h3>
        </div>
        <div className="sidebarBoxSub">
            <h3>Subscriptions</h3>
        </div>
      </div> 
    </div>
  )
}
