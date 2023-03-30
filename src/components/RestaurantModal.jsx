import React from 'react';
import '../CSS/RestaurantModal.css';


const RestaurantModal = ({ restaurant, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">Close</button>
        <h1>{restaurant.dba}</h1>
        <h2>{restaurant.inspection_type}</h2>
        <h3>{restaurant.action}</h3>
        <p>Violations: {restaurant.violation_description}</p>
        <h2>Grade: {restaurant.grade}</h2>
      </div>
    </div>
  );
};

export default RestaurantModal;
