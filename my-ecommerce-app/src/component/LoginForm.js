import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/products');
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Failed to connect to the server.');
    }
  };

  if (showLogin) {
    return (
      <div>
        <h2>Login</h2>
        {message && (
          <div style={{ color: 'red' }}>
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <button type="button" onClick={() => setShowLogin(false)}>Switch to Signup</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <SignupForm onSwitch={() => setShowLogin(true)} />;
  }
};

export default LoginForm;
