import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
// import './home.css'

export default function Profile() {
  const [ user, setUser] = useState({});
  const params = useParams()
  const firstName = useParams().firstName

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/user?firstName=${firstName}`);
      setUser(res.data);
    };  
    fetchUser();
  }, [firstName]);
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
              <h4 className="profileInfoName">{user.firstName}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed firstName={firstName}/>
        <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  )
}
