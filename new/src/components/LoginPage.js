import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Import the useAuth hook
import "./LoginPage.css"

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setLoggedIn } = useAuth(); // Destructure setLoggedIn from the context


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      if (response && response.data) {
        // Process the successful response here
        setLoggedIn(true);
        navigateTo('dashboard');
      } else {
        // Handle the case where response or response.data is not as expected
        setError('Unexpected response format from server.');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      setError(error.response && error.response.data ? error.response.data.message : 'Login request failed.');
    }
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
