import React from 'react'
import './Css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign up</button>
        <p className='loginsignup-login'>Aleady have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' />
        <p>I agree to the terms and conditions</p>    

      </div>
      </div>
    </div>
  )
}
