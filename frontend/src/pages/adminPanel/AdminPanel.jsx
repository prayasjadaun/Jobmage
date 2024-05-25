import React from 'react';
import './adminpanel.css'
import { Link } from 'react-router-dom';
const AdminPanel = () => {
  return (
    <div className='admin-panel'>
      <h2>Admin Panel</h2>
      <Link to='/postJob' className="link-button">
          <h4>Post a job</h4>
        </Link>
        <Link to='/userList' className="link-button">
          <h4>Users</h4>
        </Link>
    </div>
  );
};

export default AdminPanel;