import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <section className='log-container'>
    <div className='login-container'>
      <div className='login-logo'>
        <span className='blue'>Job</span><span className='green'>Mage</span>
      </div>
      <h1>Login</h1>
      <form className='login-form'>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder='user@exmaple.com' />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder='password' />
        <button className='login-btn'>Login</button>
        <p>Don't have an account? <a ><Link to='/signup'>Create Account</Link></a></p>

      </form>
    </div>
    </section>
  )
}

export default Login
