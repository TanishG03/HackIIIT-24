// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for Navbar styles

const Navbar = ({ currentPage, navigateTo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Bike Rental</div>
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
        <button
          className={currentPage === 'login' ? 'active' : ''}
          onClick={() => navigateTo('login')}
        >
          Login
        </button>
        <button
          className={currentPage === 'signup' ? 'active' : ''}
          onClick={() => navigateTo('signup')}
        >
          Sign Up
        </button>
        <button
          className={currentPage === 'dashboard' ? 'active' : ''}
          onClick={() => navigateTo('dashboard')}
        >
          Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
