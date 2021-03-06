import React from 'react'
import './contacts.css'
import { PersonSearch } from '@mui/icons-material'
import { display } from '@mui/system'

export default function Contacts() {
  return (
    <div className="contacts">
       <div className="contactSearch"> 
           <h2>Contacts</h2>
            <div className="contactSearchbar">
            <input placeholder='find friends' className='searchInput' />
                <PersonSearch className='searchIcon'/>
                
            </div>
         </div> 
        <div className="contactDetails">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Saloni Bhatia</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        <div className="contactDetails">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image"  className='contactsImg'/>
            <span className="contactsName">Sandeep Bhatt</span>
        </div>
        
    </div>
  )
}
