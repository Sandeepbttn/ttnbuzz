import React from 'react'
import './rightbar.css'
import Suggestion from '../suggestion/Suggestion'
import Contacts from '../contacts/Contacts'

export default function Rightbar({profile}) {
  
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="" />
          <span className="birthdayText">
            <b>John cena</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="" />
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
         <Contacts/>
         <Suggestion/>
        
      </>
    );
  };


  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>  
    </div>
  )
}
