import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-container'>
        <div className="sidebar-logo">
            <span className='blue'>Job</span><span className='green'>Mage</span>
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
