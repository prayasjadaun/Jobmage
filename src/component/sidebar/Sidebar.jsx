import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-container'>
        <div className="sidebar-logo">
        <Link to='/' className='Link'><span className='blue'>Job</span><span className='green'>Mage</span></Link>
        </div>
        <div className="sidebar-links">
            <div className='section-links'>Jobs</div>
            <div className='section-links'>Resources</div>
            <div className='section-links'>Feeds</div>
            <div className='section-links'>Messages</div>
            <div className='section-links'>ChatBot</div>
            <div className='section-links'>Settings</div>
        </div>
    </div>
    <hr />
    </div>
  )
}

export default Sidebar
