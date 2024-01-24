// import React, { useState } from 'react';
import axios from 'axios';

// const RentOutBike = ({ navigateTo }) => {
//   const [isListingCreated, setListingCreated] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     milesDriven: '',
//     hasFuel: false,
//     user_email: '', // Adding the user_email field
//     isAvailable: true, // Adding the isAvailable field
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleRentOut = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'http://127.0.0.1:5000/rent-out',
//         formData
//       );

//       if (response.status === 201) {
//         setListingCreated(true);
//       } else {
//         console.error('Error response from server:', response); // Log the server response
//         alert('Failed to create listing. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error renting out the bike:', error); // Log any caught error
//       alert('Failed to create listing. Please try again later.');
//     }
//   };

//   return (
//     <div className="rent-out-bike">
//       <h2>Rent Out Your Bike</h2>
//       <form className="bike-form" onSubmit={handleRentOut}>
//         <label>
//           Vehicle Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Type Vehicle Name"
//           />
//         </label>
//         <label>
//           Vehicle Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Describe your bike"
//           />
//         </label>
//         <label>
//           Miles Driven:
//           <input
//             type="number"
//             name="milesDriven"
//             value={formData.milesDriven}
//             onChange={handleInputChange}
//             placeholder="Mileage"
//           />
//         </label>
//         <label className="checkbox-label">
//           Has Fuel:
//           <input
//             type="checkbox"
//             name="hasFuel"
//             checked={formData.hasFuel}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           User Email: {/* Adding the user_email field */}
//           <input
//             type="text"
//             name="user_email"
//             value={formData.user_email}
//             onChange={handleInputChange}
//             placeholder="Your Email"
//           />
//         </label>
//         <label className="checkbox-label">
//           Is Available: {/* Adding the isAvailable field */}
//           <input
//             type="checkbox"
//             name="isAvailable"
//             checked={formData.isAvailable}
//             onChange={handleInputChange}
//           />
//         </label>
//         {/* Placeholder for file upload */}
//         <label>
//           Pictures:
//           <input
//             type="file"
//             name="pictures"
//             multiple
//             onChange={handleInputChange}
//             disabled
//           />
//         </label>
//         <button type="submit">Submit Listing</button>
//       </form>
//       {isListingCreated && <div>Listing created successfully!</div>}
//       <button onClick={() => navigateTo('landing')}>Go Back</button>
//     </div>
//   );
// };

// export default RentOutBike;



// src/components/RentOutBike.js

import React, { useState } from 'react';
import './RentOutBike.css';
import '../fonts.css'; // Import the custom font CSS


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

  const handleRentOut = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/rent-out',
        formData
      );

      if (response.status === 201) {
        setListingCreated(true);
      } else {
        console.error('Error response from server:', response); // Log the server response
        alert('Failed to create listing. Please try again later.');
      }
    } catch (error) {
      console.error('Error renting out the bike:', error); // Log any caught error
      alert('Failed to create listing. Please try again later.');
    }
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
      <div className='frm'>
      <h2 className="form-title">Post Your Ad</h2>

      <div className="toRent">
        <form className="horizontal-form">
          <div className="form-half">
            <label>
              Vehicle Name:
              <input
                type="text"

                name="vehicleName"
                value={formData.vehicleName}
                onChange={handleInputChange}
                placeholder="Type Vehicle Name"
              />
            </label>
            <label>
              Vehicle Description:
              <textarea
                name="vehicleDescription"
                value={formData.vehicleDescription}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Miles Driven:
              <input
                type="text"
                name="milesDriven"
                value={formData.milesDriven}
                onChange={handleInputChange}
              />
            </label>
            <label className="checkbox-label">
              Has Fuel:
              <input
                type="checkbox"
                name="hasFuel"
                checked={formData.hasFuel}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Pictures:
              <input
                type="file"
                name="pictures"
                multiple
                onChange={handleInputChange}
              />
            </label>
          </div>



        </form>
        </div>

        <div className="button-container" style={{ fontFamily: 'Circular, sans-serif' }} >
    <button onClick={handleRentOut} className="rent-out-button">Rent Out</button>
    <button onClick={() => navigateTo('landing')} className="go-back-button">Go Back</button>
</div>

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
