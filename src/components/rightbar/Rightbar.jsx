import React from 'react'
import './rightbar.css'
import Suggestion from '../suggestion/Suggestion'
import Contacts from '../contacts/Contacts'

export default function Rightbar() {
  return (
    <div className='rightbar'>
       
         <Contacts/>
       
       
         <Suggestion/>
       
    </div>
  )
}
