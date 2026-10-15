import React from 'react'
import './Pproject.css'
function Pproject() {
  return (
    <div className='project'>
      <br />
      <div><h2> My Projects</h2></div>
    <br />
      <div>Projects built during hands-on Python full-stack training at Besant Technologies.</div>
      <br />
      <br />
      <div className='pcard'>
          <div className="subcard">
            <div>DJANGO.WEB</div>
            <div className='pname'><h4>CRUD Web Application </h4>Mdular django app with REST APIs and ORM integration</div>
          </div>
          <div className="subcard">
            <div >SQL.ANALYTICS</div>
            <div className='pname'><h4>Sample Superstore Analysis </h4>Sales & profit analysis using joins,aggregatios,window functions</div>
          </div>
          <div className="subcard">
            <div>PYTHON.TKINTER</div>
            <div className='pname'><h4>Student Registration Form</h4>GUI-based enquiry & admissions form with validation</div>
          </div>
      </div>
      </div>
  )
}

export default Pproject