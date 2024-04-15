import React from 'react'
import SignUp from '../login/SignUp'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navb' id='home'>
      <div className='navbar'>
      <div className='nav-logo'>
        <span className='blue'>Job</span><span className='green'>Mage</span>
      </div>
      <div className='nav-link nav-menu'>
        <div className="nav-icon">Jobs</div>
        <div className="nav-icon">Resources</div>
        <div className="nav-icon">Roadmap</div>
        <div className="nav-icon">Contact</div>
        <div className="nav-icon">Dashboard</div>
        <button className="nav-signup"><Link to="/login" style={{textDecoration:"none", color:"white"}}>SignUp</Link> </button>
      </div>
      <div className="nav-toggle">
        <i className="nav-bars">|||</i>
      </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
