import React from 'react'
import './sharepost.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Sharepost() {
  return (

        <div className='sharepost'>
            <div className="sharepostBox">
                    <div className="sharepostTop">
                        <img className="shareProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU" alt="profile image" />
                        <input placeholder="Start a post" className="sharepostInput"/>
                        <AddPhotoAlternateIcon className="sharepostIcon"/>
                        <span className="sharepostOptionText">Photo/Video</span>
                    </div>      
            </div>
        </div>
  )
}
