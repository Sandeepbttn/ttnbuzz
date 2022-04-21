import {useContext} from 'react'
import "./userMiniProfile.css"
import { AuthContext } from "../../context/AuthContext";

export default function UserMiniProfile() {

  const { user } = useContext(AuthContext);
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
              src={
                user.profilePicture
                  ? user.profilePicture
                  : "https://res.cloudinary.com/buzz-snaps/image/upload/v1650453947/noAvatar_mddqh4.png"
              }
              alt=""
            />
            
          </div>
          <div className="miniprofileInfo">
              <h3 className="miniprofileInfoName">{user.firstName}</h3>
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
