import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Dashboard = ({ navigateTo }) => {
  const { setLoggedIn } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [listings, setListings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [showListings, setShowListings] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    navigateTo('landing');
  };

  const fetchBookings = async () => {
    setShowListings(false);
    if (!showBookings) {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user-bookings', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
    setShowBookings(!showBookings);
  };

  const fetchListings = async () => {
    setShowBookings(false);
    if (!showListings) {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user-listings', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    }
    setShowListings(!showListings);
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>This is your personalized dashboard.</p>
      <button onClick={fetchBookings}>View Your Bookings</button>
      {showBookings && (
        <div>
          {bookings.length > 0 ? (
            <div>
              <h3>My Bookings</h3>
              {bookings.map((booking) => (
                <div key={booking.id}>
                  <p>Booking ID: {booking.id}</p>
                  {/* Add more booking details here */}
                </div>
              ))}
            </div>
          ) : (
            <p>No bookings available.</p>
          )}
        </div>
      )}
      <button onClick={fetchListings}>Manage Listings</button>
      {showListings && (
        <div>
          {listings.length > 0 ? (
            <div>
              <h3>My Listings</h3>
              {listings.map((listing) => (
                <div key={listing.id}>
                  <p>Listing ID: {listing.id}</p>
                  {/* Add more listing details here */}
                </div>
              ))}
            </div>
          ) : (
            <p>No listings available.</p>
          )}
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
