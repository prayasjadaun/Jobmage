import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './userprofile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initially not loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:5001/api/profile', config);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem('token');
      navigate('/');
    }, 3000);
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Username: {userData?.username}</p>
          <p>Email: {userData?.email}</p>
          <p>Role: {userData?.role}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
