import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Contacts from '../Contacts'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='h-screen bg-white'>
      <Contacts/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
