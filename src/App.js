import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Homepage from './Homepage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div className="app-container">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
