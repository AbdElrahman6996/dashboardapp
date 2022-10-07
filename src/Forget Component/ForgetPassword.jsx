import React from 'react'
import Emailicon from '../icons/Email-icon.svg'
import Callicon from '../icons/Call-icon.svg'
import Backicon from '../icons/Back-icon.svg'
import './ForgetPassword.css'
const ForgetPassword = () => {
    return (
        <div className='forgetpassword-container'>
            <h2>Forgot Password</h2>
            <p className='please'>Please select option to send link reset password</p>
            <div className='reset-email'>
                <div className='upper-email'>
                    <div className='img'>
                        <img src={Emailicon} alt="" />
                    </div>
                    <div className="content">
                    <h6>Reset via Email</h6>
                    <p>We will send a link to reset your paswword</p>
                    </div>
                </div>

                <div className='lower-email'>
                    <input type="text"placeholder='Email Address' />
                </div>
            </div>
            <div className='reset-sms'>
                <div className='img'>
                    <img src={Callicon} alt="" />
                </div>
                <div className='content'>
                    <h6>Reset via SMS</h6>
                    <p>We will send a link to reset your paswword</p>
                </div>
            </div>
            <a href="/forget/resetpassword" className='resetpassword'>Send Link Reset Password</a>
            <a href="/" className='backbtn'><img src={Backicon} alt="" />Back to sign in</a>
        </div>
    )
}

export default ForgetPassword