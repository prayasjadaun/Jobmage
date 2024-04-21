import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sidebar.css';

function Sidebar({ setSelectedPage, userId }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 778);
  const [username, setUsername] = useState('');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedPage(link);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`/api/username/${userId}`);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };
    fetchUsername();
    
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 778);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [userId]);

  return (
    <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <Link to="/" className="Link">
            <span className="blue">Job</span>
            <span className="green">Mage</span>
          </Link>
        </div>
        <div className="sidebar-user">
          <div className="user-info">
            Hi, {username || "guest"}
            
          </div>
        </div>
        <div className="sidebar-links">
          <div
            className={
              selectedLink === "jobs" ? "section-links active" : "section-links"
            }
            onClick={() => handleLinkClick("jobs")}
          >
            Jobs
          </div>
          <div
            className={
              selectedLink === "resources"
                ? "section-links active"
                : "section-links"
            }
            onClick={() => handleLinkClick("resources")}
          >
            Resources
          </div>
          <div
            className={
              selectedLink === "feeds"
                ? "section-links active"
                : "section-links"
            }
            onClick={() => handleLinkClick("feeds")}
          >
            Feeds
          </div>
          <div
            className={
              selectedLink === "messages"
                ? "section-links active"
                : "section-links"
            }
            onClick={() => handleLinkClick("messages")}
          >
            Messages
          </div>
          <div
            className={
              selectedLink === "chatbot"
                ? "section-links active"
                : "section-links"
            }
            onClick={() => handleLinkClick("chatbot")}
          >
            ChatBot
          </div>
          <div
            className={
              selectedLink === "settings"
                ? "section-links active"
                : "section-links"
            }
            onClick={() => handleLinkClick("settings")}
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
