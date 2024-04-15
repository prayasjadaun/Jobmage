import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ setSelectedPage }) {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedPage(link); // Pass selected link to parent component
  };

  return (
    <div className="sidebar">
      <div className='sidebar-container'>
        <div className="sidebar-logo">
          <Link to='/' className='Link'><span className='blue'>Job</span><span className='green'>Mage</span></Link>
        </div>
        <div className="sidebar-links">
          <div className={selectedLink === 'jobs' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('jobs')}>Jobs</div>
          <div className={selectedLink === 'resources' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('resources')}>Resources</div>
          <div className={selectedLink === 'feeds' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('feeds')}>Feeds</div>
          <div className={selectedLink === 'messages' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('messages')}>Messages</div>
          <div className={selectedLink === 'chatbot' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('chatbot')}>ChatBot</div>
          <div className={selectedLink === 'settings' ? 'section-links active' : 'section-links'} onClick={() => handleLinkClick('settings')}>Settings</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Sidebar;
