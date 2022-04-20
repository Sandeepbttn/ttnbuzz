import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`http://localhost:3000/register`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
 

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
        <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Firstname"
              required
              ref={firstname}
              className="loginInput"
            />
            <input
              placeholder="Lastname"
              required
              ref={lastname}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}