import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userprofile.css'; 

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'krishns',
    email: 'krishna@example.com'
  });
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear user data from local storage)
    // For now, let's just redirect to the login page
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
