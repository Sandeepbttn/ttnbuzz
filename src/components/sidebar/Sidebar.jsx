import React from 'react'
import './sidebar.css'
import { RssFeed } from '@mui/icons-material'
import UserMiniProfile from '../userMiniProfile/UserMiniProfile'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="userMiniProfile">
        <UserMiniProfile/>
      </div>

      <div className="sidebarBox">
        <div className="sidebarBoxRecent">
          <p>Recent</p>
          <ul className="sidebarBoxList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          </ul>
          <button className="sidebarBoxBtn">show more</button>
        </div>
        <hr/>
        <div className="sidebarBoxGroups">
            <p>Groups</p>
            <ul className="sidebarBoxList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          </ul>
            <button className="sidebarBoxBtn">show more</button>
        </div>

        <hr/>
        <div className="sidebarBoxSub">
            <p>Subscriptions</p>
            <ul className="sidebarBoxList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          </ul>
            <button className="sidebarBoxBtn">show more</button>
        </div>
      </div> 
    </div>
  )
}
