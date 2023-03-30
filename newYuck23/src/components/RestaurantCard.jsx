// src/components/RestaurantCard.jsx

import React, { useState } from "react";
import { formatDate } from "../helpers/formatDate";
import RestaurantModal from "./RestaurantModal";
import '../CSS/Restaurant.css';



const RestaurantCard = ({ restaurant, city }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    name,
    building,
    street,
    boro,
    city: cityName,
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
        <h2>{name}</h2>
        <p>
          {building} {street} {boro}
        </p>
        <p>
          {cityName}, NY {zipcode}
        </p>
        <p>{phone}</p>
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
