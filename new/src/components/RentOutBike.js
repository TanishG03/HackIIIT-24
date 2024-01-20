// src/components/RentOutBike.js
import React, { useState } from 'react';

const RentOutBike = ({ navigateTo }) => {
  const [isListingCreated, setListingCreated] = useState(false);

  const handleRentOut = () => {
    // Implement your bike listing creation logic here
    // For example, send listing data to a server

    // Assuming listing creation is successful
    setListingCreated(true);
  };

  return (
    <div className="rent-out-bike">
      <h2>Rent Out Your Bike</h2>
      <p>Make money by renting out your bike when you're not using it.</p>
      <button onClick={handleRentOut}>Rent Out</button>
      <button onClick={() => navigateTo('landing')}>Go Back</button>

      {/* Display a success message */}
      {isListingCreated && (
        <div className="success-message">
          Your bike listing has been created successfully.
        </div>
      )}
    </div>
  );
};

export default RentOutBike;
