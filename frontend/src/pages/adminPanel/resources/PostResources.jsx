import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../adminpanel.css';

const PostResources = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className='post-panel'>
      <div className='ad-head'>
      <h2 className='admin-panel-title'>Post resources</h2>
      <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      <div className='admin-panel-links'>
        
        <Link to='/postBan' className="link-button card">
          <span>Post Banner</span>
        </Link>
        <Link to='/postBook' className="link-button card">
          <span>Post Books</span>
        </Link>
        <Link to='/postCourse' className="link-button card">
          <span>Post Courses</span>
        </Link>
      </div>
    </div>
  );
};

export default PostResources;
