import React from 'react';
import './LandingPage.css';

const LandingPage = ({ navigateTo }) => {
  return (
    <div className="landing-page">
      <div className="flex-container">
        <div className="flex-item" onClick={() => navigateTo('rent')}>
          <h2>Rent a Bike</h2>
        </div>
        <div className="flex-item" onClick={() => navigateTo('rent-out')}>
          <h2>Rent Out Your Bike</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
