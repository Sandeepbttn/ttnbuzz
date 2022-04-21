import {useContext} from 'react'
import './topbar.css'
import {PersonSearch,Person,Chat} from '@mui/icons-material';
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";



export default function Topbar() {
  const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
       <span className="logo">Buzz</span>
      </div>
      <div className="topbarCenter">
         <div className="searchbar">
             <PersonSearch className='searchIcon'/>
             <input placeholder='Search for people , friend or post' className='searchInput' />
         </div>
      </div>
      <div className="topbarRight">
      
          <div className="topbarLink">
          <Link to={`/profile/${user.firstName}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : "https://res.cloudinary.com/buzz-snaps/image/upload/v1650453947/noAvatar_mddqh4.png"
            }
            alt=""
            className='topbarImg'
          />
          </Link>
              <span className="topbarName">{user.firstName}</span> 
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
            </div>
            
            
          </div>
      </div>
    </div>
  )
}

