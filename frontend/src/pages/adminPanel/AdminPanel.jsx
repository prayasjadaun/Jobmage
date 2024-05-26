import React from 'react';
import { Link } from 'react-router-dom';
import './adminpanel.css';

const AdminPanel = () => {
  return (
    <div className='admin-panel'>
      <h2 className='admin-panel-title'>Admin Panel</h2>
      <div className='admin-panel-links'>
        <Link to='/postJob' className="link-button card">
          <span>Post a Job</span>
        </Link>
        <Link to='/userList' className="link-button card">
          <span>User List</span>
        </Link>
        <Link to='/jobManage' className="link-button card">
          <span>Manage Jobs</span>
        </Link>
        <Link to='/postRes' className="link-button card">
          <span>Post Resources</span>
        </Link>
        <Link to='/ResManage' className="link-button card">
          <span>Resource Management</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
