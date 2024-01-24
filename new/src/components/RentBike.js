import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RentBike.css';

const RentBike = ({ navigateTo }) => {
  const [bikes, setBikes] = useState([]);
  const [isBookingSuccessful, setBookingSuccessful] = useState(false);
  const [selectedBikeId, setSelectedBikeId] = useState(null);

  useEffect(() => {
    const fetchAvailableBikes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/available-bikes');
        setBikes(response.data);
      } catch (error) {
        console.error('Error fetching available bikes:', error);
      }
    };
    fetchAvailableBikes();
  }, []);

  const handleRentNow = async (bikeId) => {
    setSelectedBikeId(bikeId);
    try {
      const token = localStorage.getItem('token');
      const payload = { bikeId };
      const response = await axios.post(
        'http://127.0.0.1:5000/book-bike',
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setBookingSuccessful(true);

        // Remove the booked bike from the list using the filter method
        setBikes(prevBikes => prevBikes.filter(bike => bike.id !== bikeId));
      } else {
        alert('Booking failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error booking the bike:', error);
      alert('Booking Successful.');
    }
  };

  return (
    <div className="rent-bike">
      <div className="flex-container1_rent">
        <div className="box-content0_rent">
          <span className="typing-animation1_rent">Want A Ride? </span>
          <br />
          <div className="typing-animation1_rent">
            We've Got You Covered..
          </div>
        </div>
      </div>

      <div className="card-container">
        {bikes.map(bike => (
          <div className="card" key={bike.id}>
            <div className="card-image"></div>
            <div className="card-details">
              <h3>{bike.name}</h3>
              <h4>Owner: {bike.owner}</h4>
              <h4>Charge per Hour: ${bike.chargePerHour}</h4>
              <h4>Availability: {bike.isAvailable ? 'Yes' : 'No'}</h4>
            </div>
            <button 
              className='rent_now' 
              onClick={() => handleRentNow(bike.id)} 
              disabled={!bike.isAvailable}
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigateTo('landing')}>Go Back</button>

      {isBookingSuccessful && selectedBikeId && (
        <div className="success-message">
          Booking successful for bike ID {selectedBikeId}! You will receive a confirmation shortly.
        </div>
      )}
    </div>
  );
};

export default RentBike;
