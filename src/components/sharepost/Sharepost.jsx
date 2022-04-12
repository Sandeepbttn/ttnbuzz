import React from 'react'
import './sharepost.css'
export default function Sharepost() {
  return (

        <div className='sharepost'>

            <div className="sharepostBox">
                    <div className="shareTop">
                        <img className="shareProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU" alt="profile image" />
                        <input placeholder="Start a post" className="shareInput"/>
                    </div>   
            </div>
        </div>
  )
}
