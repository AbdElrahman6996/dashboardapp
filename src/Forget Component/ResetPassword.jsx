import React from 'react'
import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <main className='resetpassword-component'>
      <div className='ResetPassword-container'>
        <h2>Reset Password</h2>
        <p className='create-new'>Create your new password</p>
        <div className='container'>
          <div>
            <p>Email</p>
            <input type="text" placeholder='Email' />
          </div>
          <div>
            <p>New Password</p>
            <input type="text" placeholder='New Password' />
          </div>
          <div>
            <p>Confirm New Password</p>
            <input type="text" placeholder='Confirm New Password' />
          </div>
        </div>
        <a href="/">Reset Password</a>
      </div>
    </main>
  )
}

export default ResetPassword