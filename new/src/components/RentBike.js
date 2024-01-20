// src/components/RentBike.js
import React, { useState } from 'react';

const RentBike = ({ navigateTo }) => {
  const [isBookingSuccessful, setBookingSuccessful] = useState(false);

  const handleRentNow = () => {
    // Implement your booking logic here
    // For example, send a booking request to a server

    // Assuming booking is successful
    setBookingSuccessful(true);
  };

  return (
    <div className="rent-bike">
      <h2>Rent a Bike</h2>
      <p>Explore the campus with ease by renting a bike.</p>
      <button onClick={handleRentNow}>Rent Now</button>
      <button onClick={() => navigateTo('landing')}>Go Back</button>

      {/* Display a success message */}
      {isBookingSuccessful && (
        <div className="success-message">
          Booking successful! You will receive a confirmation shortly.
        </div>
      )}
    </div>
  );
};

export default RentBike;
