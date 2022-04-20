import React from 'react'
import './sharepost.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";

export default function Sharepost() {

  const { user } = useContext(AuthContext);
  return (

        <div className='sharepost'>
            <div className="sharepostBox">
                    <div className="sharepostTop">
                        <img className="shareProfileImg" src={
              user.profilePicture
                ? user.profilePicture
                : "https://res.cloudinary.com/buzz-snaps/image/upload/v1650453947/noAvatar_mddqh4.png"
            } alt="profile image" />
                        <input placeholder="Start a post" className="sharepostInput"/>
                        <AddPhotoAlternateIcon className="sharepostIcon"/>
                        <span className="sharepostOptionText">Photo/Video</span>
                    </div>      
            </div>
        </div>
  )
}
