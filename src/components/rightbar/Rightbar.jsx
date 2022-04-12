import React from 'react'
import './rightbar.css'
import Suggestion from '../suggestion/Suggestion'
import Contacts from '../contacts/Contacts'

export default function Rightbar() {
  return (
    <div className='rightbar'>Rightbar
       <div className="contactsbox">
         <Contacts/>
       </div>
       <div className="suggestionbox">
         <Suggestion/>
       </div>
    </div>
  )
}
