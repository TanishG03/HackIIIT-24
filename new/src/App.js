// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import RentBike from './components/RentBike';
import RentOutBike from './components/RentOutBike';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './fonts.css';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './components/AuthContext'; // Import the AuthProvider

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <AuthProvider> {/* Wrap your app in the AuthProvider */}
      <div className="App">
        <Navbar currentPage={currentPage} navigateTo={navigateTo} />
        <div className="content">
          {/* Render the content based on the current page */}
          {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
          {currentPage === 'rent' && <RentBike navigateTo={navigateTo} />}
          {currentPage === 'rent-out' && <RentOutBike navigateTo={navigateTo} />}
          {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
          {currentPage === 'signup' && <SignupPage navigateTo={navigateTo} />}
          {currentPage === 'dashboard' && <Dashboard navigateTo={navigateTo} />}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
