import React, { useContext, useEffect, useState } from 'react'
import './contacts.css'
import { PersonSearch } from '@mui/icons-material'
// import { display } from '@mui/system'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Contacts(props) {
    // const { user } = props;
    const [friends, setFriends] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("http://localhost:3000/user/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [user]);

    return (
        <div className="contacts">
            <div className="contactSearch">
                <h2>Contacts</h2>
                <div className="contactSearchbar">
                    <input placeholder='find friends' className='searchInput' />
                    <PersonSearch className='searchIcon' />

                </div>
            </div>
            {friends.map((friend) => (
            <Link to={`/profile/${friend.firstName}`}>
                <div className="contactDetails">

                    <img src={friend.profilePicture ? friend.profilePicture : "https://res.cloudinary.com/buzz-snaps/image/upload/v1650453947/noAvatar_mddqh4.png"} alt="" className='contactsImg' />
                    <span className="contactsName">{friend.firstName} {friend.lastName}</span>
                </div>
            </Link>
            ))}

        </div>
    )
}   
