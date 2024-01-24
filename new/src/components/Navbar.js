// src/components/Navbar.js
import React from 'react';
import { useAuth } from './AuthContext'; // Import the useAuth hook
import './Navbar.css';

const Navbar = ({ currentPage, navigateTo }) => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to access isLoggedIn

  return (
    <nav className="navbar">
      <div className="navbar-brand">Bike@I</div>
      <div className="navbar-menu">
        <button
          className={currentPage === 'landing' ? 'active' : ''}
          onClick={() => navigateTo('landing')}
        >
          Home
        </button>
        <button
          className={currentPage === 'rent' ? 'active' : ''}
          onClick={() => navigateTo('rent')}
        >
          Rent a Bike
        </button>
        <button
          className={currentPage === 'rent-out' ? 'active' : ''}
          onClick={() => navigateTo('rent-out')}
        >
          Rent Out Your Bike
        </button>
        {!isLoggedIn && (
          <button
            className={currentPage === 'login' ? 'active' : ''}
            onClick={() => navigateTo('login')}
          >
            Login
          </button>
        )}
        {!isLoggedIn && (
          <button
            className={currentPage === 'signup' ? 'active' : ''}
            onClick={() => navigateTo('signup')}
          >
            Sign Up
          </button>
        )}
        {isLoggedIn && (
          <button
            className={currentPage === 'dashboard' ? 'active' : ''}
            onClick={() => navigateTo('dashboard')}
          >
            Dashboard
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;