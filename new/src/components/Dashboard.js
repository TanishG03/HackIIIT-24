// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  // You can fetch user data or display user-specific content here

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>This is your personalized dashboard.</p>
      <button>View Your Bookings</button>
      <button>Manage Listings</button>
      <button>Logout</button>
    </div>
  );
};

export default Dashboard;
