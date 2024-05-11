import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sidebar.css';

function Sidebar({ setSelectedPage, userId }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 778);
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedPage(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUsername(response.data.username);
        setUserRole(response.data.role);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setIsLoading(false);
      }
    };

    fetchUserData();

    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 778);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [userId]);

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
          <div className="user-info">Hi, {username || 'guest'}</div>
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
          {userRole === 'admin' && (
    <div
      className={selectedLink === 'admin-panel' ? 'section-links active' : 'section-links'}
      onClick={() => handleLinkClick('admin-panel')}
    >
      Admin Panel
    </div>
  )}
          <div
            className={selectedLink === 'chatbot' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('chatbot')}
          >
            ChatBot
          </div>
          <div
            className={selectedLink === 'settings' ? 'section-links active' : 'section-links'}
            onClick={() => handleLinkClick('settings')}
          >
            Settings
          </div>
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
