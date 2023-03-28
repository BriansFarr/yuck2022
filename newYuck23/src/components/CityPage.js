import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { fetchRestaurants } from '../helpers/fetchRestaurants';

const CityPage = ({ city }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRestaurants = await fetchRestaurants(city, searchTerm);
      const mappedRestaurants = fetchedRestaurants.map((restaurant) => {
        return {
          name: restaurant.dba,
          grade: restaurant.grade,
          inspection_date: restaurant.inspection_date,
          city: city,
        };
      });
      setRestaurants(mappedRestaurants);
      setFilteredRestaurants(mappedRestaurants);
    };
    fetchData();
  }, [city, searchTerm]);
  

  useEffect(() => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchTerm, restaurants]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  const handleSortBy = (event) => {
    const sorted = [...filteredRestaurants].sort((a, b) => {
      if (event.target.value === "name") {
        return a.name.localeCompare(b.name);
      } else if (event.target.value === "grade") {
        return a.grade.localeCompare(b.grade);
      } else if (event.target.value === "date") {
        return new Date(b.inspection_date) - new Date(a.inspection_date);
      }
      return 0; // return a default value
    });
    setFilteredRestaurants(sorted);
  };
  

  return (
    <div className="city-page">
      <h1>{city} Restaurants</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Search ${city} restaurants by name...`}
        />
      </div>
      <div className="sorting-options">
        <button onClick={() => setSortBy('date')}>Sort by date</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.name}
            restaurant={restaurant}
            city={city}
          />
        ))}
      </div>
    </div>
  );
};

export default CityPage;
