// src/components/MotorbikeItem.js
import React from "react";

function MotorbikeItem({ motorbike }) {
  return (
    <li className="motorbike-item">
      <h3>{motorbike.name}</h3>
      <p>Price: ${motorbike.price} per day</p>
      <button>Rent Now</button>
    </li>
  );
}

export default MotorbikeItem;
