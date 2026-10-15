import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Pfooter.scss'

function Pfooter() {
  return (
    <div className='footer'>
        <div className='left-footer'>
            <FaSquareWhatsapp />
            <IoCall />
            <MdEmail />
        </div>
        <div className='center'>
        Python full-stack developer trained hands-on in Django, Tkinter, and SQL through intensive training at Besant Technologies. I build scalable backend applications, clean REST APIs, and reliable GUI-based tools — with a strong foundation in debugging, automation, and clean coding practices.
        </div>
        <div className='right-footer'>
            <h1>Contact Here</h1>
            <br />
            <div> <input type="text" className='Name' placeholder='Enter your name' /></div> 
            <br />
            <div><input type="text" className='email' placeholder='Enter your email' /></div>
            <br />
            <div> <textarea name="Address" id="" placeholder='Enter your Address'></textarea></div>
            <br />
            <button>send Message</button>       
        </div>
        
    </div>
  )
}

export default Pfooter