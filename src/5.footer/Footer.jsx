import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='left-footer'>
            <FaSquareWhatsapp />
            <IoCall />
            <MdEmail />
        </div>
        <div className='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium placeat, expedita est quisquam consequatur tenetur libero quas optio, fugit nobis nulla nihil recusandae perferendis eum quasi. Enim, labore voluptatum!
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

export default Footer