import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.scss'
const Notfound = () => {
  return (
    <div className='notfound'> 
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking does not exist.</p>
   
    <Link to='/' className='home-link'>Go Back Home</Link>
    </div>
  )
}

export default Notfound