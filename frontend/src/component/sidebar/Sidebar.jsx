import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUserData from '../Hooks/useUserdata';
import './sidebar.css';

function Sidebar({ setSelectedPage }) {
  const { userData, isLoading, error } = useUserData();
  const [selectedLink, setSelectedLink] = useState('jobs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 778);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedPage(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 778);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <Link to="/" className="Link">
            <span className="blue">Job</span>
            <span className="green">Mage</span>
          </Link>
        </div>
        <div className="sidebar-user">
          <div className="user-info">Hi, {userData?.username || 'guest'}</div>
        </div>
        <div className="sidebar-links">
          <div
            className={selectedLink === 'jobs' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('jobs')}
          >
            Jobs
          </div>
          <div
            className={selectedLink === 'resources' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('resources')}
          >
            Resources
          </div>
          <div
            className={selectedLink === 'feeds' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('feeds')}
          >
            Feeds
          </div>
        
          <div
            className={selectedLink === 'settings' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('settings')}
          >
            Settings
          </div>
          {userData?.role === 'admin' && (
            <div
              className={selectedLink === 'admin' ? 'section-links active' : 'section-links'}
              onClick={() => handleLinkClick('admin')}
            >
              Admin
            </div>
          )}
          <button className="close-button" onClick={toggleSidebar}>
            close
          </button>
        </div>
      </div>
      <hr />
      <button className="toggle-button" onClick={toggleSidebar}>
        |||
      </button>
    </div>
  );
}

export default Sidebar;
