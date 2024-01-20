// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file
import Navbar from './components/Navbar'; // Import the updated Navbar component
import LandingPage from './components/LandingPage';
import RentBike from './components/RentBike';
import RentOutBike from './components/RentOutBike';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './fonts.css'; // Import the custom font CSS
import Dashboard from './components/Dashboard';




function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App" >
      <Navbar currentPage={currentPage} navigateTo={navigateTo} /> {/* Include the updated Navbar component */}
      <div className="content">
        {/* Render the content based on the current page */}
        {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
        {currentPage === 'rent' && <RentBike navigateTo={navigateTo} />}
        {currentPage === 'rent-out' && <RentOutBike navigateTo={navigateTo} />}
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
        {currentPage === 'signup' && <SignupPage navigateTo={navigateTo} />}
        {currentPage === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
}

export default App;
