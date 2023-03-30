// src/components/RestaurantList.jsx
import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Modal from './RestaurantModal';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$limit=300');
      const data = await response.json();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="restaurant-list">
        {restaurants
          .filter((restaurant) => restaurant.violation_description && restaurant.violation_description.trim() !== '')
          .filter((restaurant) => restaurant.dba && restaurant.dba.trim() !== '')
          .map((restaurant) => (
          <RestaurantCard key={restaurant.camis} restaurant={restaurant} onClick={openModal} />
        ))}
      </div>
      {modalVisible && selectedRestaurant && (
        <Modal restaurant={selectedRestaurant} onClose={closeModal} />
      )}
    </div>
  );
};

export default RestaurantList;
