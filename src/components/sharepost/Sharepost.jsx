import React, { useRef, useState } from 'react'
import './sharepost.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";

export default function Sharepost() {

  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const addPost = {
      userID: user._id,
      desc: desc.current.value,
    };  
  }
  return (

        <div className='sharepost'>
            <div className="sharepostBox">
                    <div className="sharepostTop">
                        <img className="shareProfileImg" src={
              user.profilePicture
                ? user.profilePicture
                : "https://res.cloudinary.com/buzz-snaps/image/upload/v1650453947/noAvatar_mddqh4.png"
            } alt="profile image" />
                        <input placeholder=" Start a post..." className="sharepostInput" ref={desc}/>
                        <form className='share' onSubmit={submitHandler}>
                        <label htmlFor="file" className="sharepostOption" >
                        <AddPhotoAlternateIcon htmlColor='green' className="sharepostIcon"/>  
                        <span className="sharepostOptionText">Photo/Video</span>
                        <input style={{display: "none"}} type = "file" id="file" accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        </form>
                    </div>      
            </div>
        </div>
  )
}
