import React from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css'
function Navbar(){
    function darkmode(){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }
    function lightmode(){
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
  return (
    <div className="Navbar" >
        <div className="left-navbar">
            <h1>  Nabirasool </h1>
        </div>
        <div className="right-navbar">
           
             <ul className="list">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li> Contact</li>
             </ul>
             <div onClick={darkmode} className="dark">Dark</div>
             <div onClick={lightmode} className="light">light</div>  
        </div>
    </div>
  )
}

export default Navbar
