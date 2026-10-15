import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import Input from '../../Component/Input/Input'


const Navbar = ({search,setSearch}) => {

  return (
    <div className='navbar'>
    <div className="navbar-left">
        <p>Ahaa</p>
    </div>
    <div className="navbar-right">
      <ul>
        <li><Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Movie" /></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Trending'>Trending</Link></li>
        <li>Upcoming</li>
        <Link to='/Contact'><li>Contact</li></Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar