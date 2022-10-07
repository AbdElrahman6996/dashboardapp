import React from 'react'
import './Loginpage.css'

const Loginpage = () => {
  return (
    <div className='login-container'>
      <h2>Login as Administrator</h2>
      <div className='container'>
        <div>
          <p>Email</p>
          <input type="text" placeholder='Email' />
        </div>
        <div>
          <p>Password</p>
          <input type="text" placeholder='New Password' />
        </div>
      </div>
      <a href="/forget" className='forget-btn'>Forget Password</a>
      <a href="/dashboard" className='signin-btn'>Sign in</a>
    </div >
  )
}

export default Loginpage