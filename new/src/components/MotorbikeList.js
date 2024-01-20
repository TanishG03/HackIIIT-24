// src/components/MotorbikeList.js
import React from "react";
import MotorbikeItem from "./MotorbikeItem";

function MotorbikeList({ motorbikes }) {
  return (
    <div className="motorbike-list">
      <h2>Available Motorbikes</h2>
      <ul>
        {motorbikes.map((motorbike) => (
          <MotorbikeItem key={motorbike.id} motorbike={motorbike} />
        ))}
      </ul>
    </div>
  );
}

export default MotorbikeList;
