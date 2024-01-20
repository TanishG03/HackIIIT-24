// LandingPage.js
import React, { useEffect } from 'react';
import './LandingPage.css';
import '../fonts.css';

const LandingPage = ({ navigateTo }) => {
  useEffect(() => {
    // Function to restart the typing animation
    const restartTypingAnimation = () => {
      const textElement = document.querySelector('.typing-animation');
      textElement.style.width = '0';
      textElement.classList.remove('typing-animation');
      void textElement.offsetWidth; // Trigger reflow to restart the animation
      textElement.classList.add('typing-animation');
    };

    // Set a timeout to restart the typing animation after it completes
    const typingAnimationTimeout = setTimeout(restartTypingAnimation, 4000);

    // Clear the timeout on component unmount
    return () => clearTimeout(typingAnimationTimeout);
  }, []);

  return (
    <div className="landing-page">
      <div className="flex-container0">
        {/* Dark overlay */}
        <div className="dark-overlay"></div>

        {/* Content inside the container with typing animation */}
        <div className="box-content">
          <div className="typing-animation">Flat Out Ride!</div>
          <p>Explore our bike rental services and enjoy the ride!</p>
        </div>
      </div>

      <div className="flex-container1">
        {/* Dark overlay */}

        {/* Content inside the container with typing animation */}
        <div className="box-content0">
          <span className="typing-animation2">Wanna go out? </span>
          <br />
          <div className="typing-animation2">Or Make A Quick Buck.. </div>
        </div>
      </div>

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
