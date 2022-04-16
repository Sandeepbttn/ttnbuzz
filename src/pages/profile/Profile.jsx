import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
// import './home.css'

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU.jpeg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Saloni Bhatia</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  )
}
