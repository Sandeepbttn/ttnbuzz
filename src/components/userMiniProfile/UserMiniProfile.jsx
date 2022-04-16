import React from 'react'
import "./userMiniProfile.css"


export default function UserMiniProfile() {
  return (
    
        <div className="miniprofile">
          <div className="miniprofileCover">
            <img
              className="miniprofileCoverImg"
              src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg"
              alt=""
            />
            <img
              className="miniprofileUserImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU.jpeg"
              alt=""
            />
          </div>
          <div className="miniprofileInfo">
              <h3 className="miniprofileInfoName">Saloni Bhatia</h3>
              <span className="miniprofileInfoDesc">Hello my friends!</span>
          </div>
          <div className="miniprofileDetails">
            <p>Posts</p>
            <span className="miniprofileInfoDesc">10</span>
            

            <p>Profile views</p>
            <span className="miniprofileInfoDesc">14</span>
          </div>
        </div>
  )
}
