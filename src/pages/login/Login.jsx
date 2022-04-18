import React from 'react'
import './login.css'

export default function Login() {

  const handleClick=(e)=>{
    e.preventDefault();
    console.log("click")

  }
    return (
      <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Buzz</h3>
          <span className="loginDesc">
            Enter your details and start your journey with us.
          </span>
          <button className="loginButton">Sign in with Google</button>
        </div>
          <div className="loginRight">
            <form className="loginBox"  onSubmit={handleClick}>
              <input placeholder="Email" type="email " className="loginInput" required/>
              <input placeholder="Password" type="password"  className="loginInput"  required/>
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }