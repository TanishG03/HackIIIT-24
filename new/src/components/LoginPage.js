// src/components/LoginPage.js
import React, { useState } from 'react';

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For example, send login request to a server

    // Assuming login is successful
    navigateTo('dashboard'); // Redirect to the dashboard after successful login
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
      <p>
        Don't have an account?{' '}
        <span onClick={() => navigateTo('signup')}>Sign up</span>
      </p>
    </div>
  );
};

export default LoginPage;
