import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // check if username and password match
    if (username === 'dhavekhiss' && password === '0123456789') {
      onLogin();
    } else {
      alert('Incorrect username or password');
    }
  }

  const handleSignupClick = () => {
    setShowSignup(true);
  }
  
  return (
    <div className="login-container">
      {showSignup ? (
        <Signup />
      ) : (
        <div className="form-container">
          <h1><img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt=""/></h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Log In</button>
          </form>
          <div className="or-separator">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line"></div>
          </div>
          <button className="facebook-button">Log in with Facebook</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="forgot-password">
            <a href="#" onClick={handleSignupClick}>Sign Up</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
