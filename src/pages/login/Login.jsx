
import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


export default function Login() {

  const email  = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext)

  const handleClick=(e)=>{
    e.preventDefault();
    // console.log(email.current.value)
   loginCall({email:email.current.value, password:password.current.value},dispatch);
 
  };

  console.log(user);


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
              <input placeholder="Email" type="email" className="loginInput"  ref={email} required/>
              <input placeholder="Password" type="password"  className="loginInput" ref={password}  required/>
              <button className="loginButton">{isFetching?"loading":"Log In"}</button>
              <span className="loginForgot">Forgot Password?</span>
              <Link to={'/register'}>
                <button className="loginRegisterButton">
                  {isFetching?"loading":"Create a New Account"} 
                </button>
               </Link>
                
            </form>
          </div>
        </div>
      </div>
    );
  }