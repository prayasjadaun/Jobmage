import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <section className='log-container'>
      <div className='login-container'>
        <div className='login-logo'>
          <Link to='/' className='Link'><span className='blue'>Job</span><span className='green'>Mage</span></Link>
        </div>
        <h1>Login</h1>
        <form className='login-form'>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='user@example.com' />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='password' />
          <button className='login-btn'><Link to='/after'>Login</Link></button>
          <p className='login-sub-btn'>Don't have an account? <Link to='/signup'>Create Account</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login
