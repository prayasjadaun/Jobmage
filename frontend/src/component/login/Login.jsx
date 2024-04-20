import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/api';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(formData); // loginUser returns the token directly this is important
      console.log('Login successful');
      console.log(token); 
      localStorage.setItem('token', token);
      navigate('/after');
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error(error);
    }
  };
  

  return (
    <section className="log-container">
      <div className="login-container">
        <div className="login-logo">
          <Link to="/" className="Link">
            <span className="blue">Job</span>
            <span className="green">Mage</span>
          </Link>
        </div>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button className="login-btn" type="submit">
            Login
          </button>
          <p className="login-sub-btn">
            Don't have an account? <Link to="/signup">Create Account</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;