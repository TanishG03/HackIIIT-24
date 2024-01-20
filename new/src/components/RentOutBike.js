// src/components/RentOutBike.js

import React, { useState } from 'react';
import './RentOutBike.css';

const RentOutBike = ({ navigateTo }) => {
  const [isListingCreated, setListingCreated] = useState(false);
  const [formData, setFormData] = useState({
    vehicleName: '',
    vehicleDescription: '',
    milesDriven: '',
    hasFuel: false,
    pictures: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : files ? Array.from(files) : value,
    }));
  };

  const handleRentOut = () => {
    // Implement your bike listing creation logic here
    // For example, send formData to a server

    // Assuming listing creation is successful
    setListingCreated(true);
  };

  return (
    <div className="rent">
      <div className="flex-container1_rob">
        {/* Dark overlay */}

        {/* Content inside the container with typing animation */}
        <div className="box-content0_rob">
          <span className="typing-animation1_rob">Rent it Out! </span>
          <br />
          <div className="typing-animation1_rob">
            Make money by renting out <br /> your bike when you're not using it.
          </div>
        </div>
      </div>
      <div>
        <form className='toRent'>
          <label>
            Vehicle Name:
            <input
              type="text"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Vehicle Description:
            <textarea
              name="vehicleDescription"
              value={formData.vehicleDescription}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Miles Driven:
            <input
              type="text"
              name="milesDriven"
              value={formData.milesDriven}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Has Fuel:
            <input
              type="checkbox"
              name="hasFuel"
              checked={formData.hasFuel}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Pictures:
            <input
              type="file"
              name="pictures"
              multiple
              onChange={handleInputChange}
            />
          </label>
        </form>
        <button onClick={handleRentOut}>Rent Out</button>
        <button onClick={() => navigateTo('landing')}>Go Back</button>
      </div>

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
