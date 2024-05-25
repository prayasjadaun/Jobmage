import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../component/Hooks/useUserdata';
import './userprofile.css';
import Loader from '../../component/Loader/loader';

const UserProfile = () => {
  const { userData, isLoading: dataLoading } = useUserData();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      {isLoading || dataLoading ? (
        <Loader />
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
