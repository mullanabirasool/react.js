import React from 'react'
import './Pskills.scss'
function Pskills() {
  return (
    <div className='skills'>
      <br />
      <div className='name1'><h2>Skills&Tools</h2></div>
      <br />
      <div><h4>The languages, frameworks, and tools I've trained on and built projects with.</h4></div>
      <br />
      <br />
      <br />
      <div className='pcard'>
          <div className="card"><h3>Python</h3>OPP,error handling,automation</div>
          <div className="card"><h3>Django&DRF</h3>ORM,REST APIs,modular apps</div>
          <div className="card"><h3>SQL&MySQL</h3>Query optimization,normalization</div>
          <div className="card"><h3>Tkinter,Git,Postman</h3>GUI tools,version control,API testing</div>
      </div>
      </div>
  )
}

export default Pskills