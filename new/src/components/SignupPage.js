// src/components/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Import the useAuth hook


const SignupPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setLoggedIn } = useAuth(); // Destructure setLoggedIn from the context


const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://127.0.0.1:5000/signup', { email, password });
    setLoggedIn(true);  
    navigateTo('dashboard');
  } catch (error) {
    setError(error.response.data.message);
  }
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
}

export default SignupPage;
