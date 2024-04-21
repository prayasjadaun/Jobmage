import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/api';
import './signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      await registerUser(formData);
      console.log('Registration successful');
      navigate('/after');
    } catch (error) {
      setError(error.response?.data?.error || 'Registration failed. Please try again.');
      console.error(error);
    }
  };
  

  return (
    <section className="sign-container">
      <div className="signup-container">
        <div className="signup-logo">
          <Link to="/" className="Link">
            <span className="blue">Job</span>
            <span className="green">Mage</span>
          </Link>
        </div>
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="user@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="role">Role</label>
          <select className='roles'
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="user">User</option>
            <option value="employer">Employer</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="signup-btn">
            Register
          </button>
          <p className="login-sub-btn">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;