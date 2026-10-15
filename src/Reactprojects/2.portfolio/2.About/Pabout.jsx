import React from 'react'
import './Pabout.scss'
function Pabout() {
  return (
    <div>
    <div className='about'>
       <div className='left-about'>
        <img src={"./nabi.png"} alt='' />
        <div className="name">Open to Oppurtunities</div>
       </div>
        <div className='right-about'>
         <div className='welcome'>Welcome! I'm</div>
         <br />
         <div><h1>MULLA NABIRASOOL</h1></div>
         <div>Python Full Stack Developer</div>
         <br />
         <div>Python full-stack developer trained hands-on in Django, Tkinter, and SQL through intensive training at Besant Technologies. 
          I build scalable backend applications, clean REST APIs, and reliable GUI-based tools — with a strong foundation in debugging, automation, and clean coding practices.</div>
          <br />
         <button className='btn1'>View Portfolio</button>
         <button className='btn2'>Download CV</button>
        </div>
    </div>
    <div className='certificates'>
      <table border="1px">
         <tbody>
          <tr>
            <td><h3>04</h3>Certificates</td>
            <td><h3>03</h3>Projects built</td>
            <td><h3>8.67</h3>CGPA/10</td>
            <td><h3>03</h3>Languages Known</td>
          </tr>
         </tbody>
        </table>
    </div>

</div>
  )
}

export default Pabout