// src/components/SignupPage.js
import React, { useState } from 'react';

const SignupPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // For example, send signup request to a server

    // Assuming signup is successful
    navigateTo('dashboard'); // Redirect to the dashboard after successful signup
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <div className="error">{error}</div>}
      <p>
        Already have an account?{' '}
        <span onClick={() => navigateTo('login')}>Login</span>
      </p>
    </div>
  );
};

export default SignupPage;
