import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function SignUp() {
  return (
    <section className='sign-container'>
    <div className='signup-container'>
      <div className='signup-logo'>
        <span className='blue'>Job</span><span className='green'>Mage</span>
      </div>
      <h1>Signup</h1>
      <form className='signup-form'>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='username' />
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder='user@exmaple.com' />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder='password' />
        <label htmlFor="Password">Confirm Password</label>
        <input type="password" placeholder='password' />
        <button className='signup-btn'> <a><Link to='/sidebar'>Register</Link></a></button>
        <p className='login-sub-btn'>Already have an account? <a ><Link to='/login'>Login</Link></a></p>

      </form>
    </div>
    </section>
  )
}

export default SignUp
