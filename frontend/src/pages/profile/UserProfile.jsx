import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userprofile.css'; 

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'krishna',
    email: 'krishna@gmail.com'
  });
  const history = useNavigate();

  const handleLogout = () => {
    history.push('/login');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome, {user.name}!</h1>
      <p className="profile-email">Email: {user.email}</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
