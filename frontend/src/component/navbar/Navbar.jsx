import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ userData }) {
  const isLoggedIn = !!userData;

  return (
    <div className='navb' id='home'>
      <div className='navbar'>
        <div className='nav-logo'>
          <Link to='/' className='Link'>
            <span className='blue'>Job</span><span className='green'>Mage</span>
          </Link>
        </div>
        <div className='nav-link nav-menu'>
          <div className="nav-icon"><Link to="/jobs" style={{ textDecoration: "none", color: "black" }}>Jobs</Link></div>
          <div className="nav-icon"><Link to="/resources" style={{ textDecoration: "none", color: "black" }}>Resources</Link></div>
          <div className="nav-icon"><Link to="/roadmap" style={{ textDecoration: "none", color: "black" }}>Roadmap</Link></div>
          <div className="nav-icon">Contact</div>
          <div className="nav-icon">
            <Link to={isLoggedIn ? "/after" : "/login"} style={{ textDecoration: "none", color: "black" }}>Dashboard</Link>
          </div>
          {isLoggedIn ? (
            <button className="nav-signup" onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }} style={{background: "red"  }} >Logout</button>
          ) : (
            <button className="nav-signup">
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>SignUp</Link>
            </button>
          )}
        </div>
        <div className="nav-toggle">
          <i className="nav-bars">|||</i>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
