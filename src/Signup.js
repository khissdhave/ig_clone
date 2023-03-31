import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the server here
    console.log({
      fullName,
      username,
      email,
      password
    });
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleFormSubmit}>
        <h1><img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt=""/></h1>
        <p>Sign up to see photos and videos from your friends.</p>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign Up</button>
        <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
      </form>
    </div>
  );
}

export default Signup;
