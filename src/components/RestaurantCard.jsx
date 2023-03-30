// src/components/RestaurantCard.jsx
import React, { useState } from "react";
import { formatDate } from "../helpers/formatDate";
import RestaurantModal from "./RestaurantModal";
import '../CSS/Restaurant.css';

const RestaurantCard = ({ restaurant }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    camis,
    dba,
    building,
    street,
    boro,
    city,
    zipcode,
    phone,
    inspection_date,
    violations,
    action,
    grade,
  } = restaurant;

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="restaurant-card" onClick={handleCardClick}>
        <h2>{dba}</h2> 
        <p>
          {building} {street}
        </p>
        <p>
          {boro}, NY, {zipcode}
        </p>
        <p>Inspection Date: {formatDate(inspection_date)}</p>
      </div>
      {showModal && (
        <RestaurantModal
          restaurant={restaurant}
          city={city}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default RestaurantCard;
