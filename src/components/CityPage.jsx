import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchRestaurants } from "../helpers/fetchRestaurants";
import RestaurantList from './RestaurantList';
import '../CSS/CityPage.css'

const CityPage = ({ city }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSearchClick = async () => {
    const fetchedRestaurants = await fetchRestaurants(searchTerm);
    const mappedRestaurants = fetchedRestaurants.map((restaurant) => {
      return {
        camis: restaurant.camis,
        dba: restaurant.dba,
        grade: restaurant.grade,
        violation_description: restaurant.violation_description,
        violation_code: restaurant.violation_code,
        inspection_date: restaurant.inspection_date,
        city: restaurant.boro,
        street: restaurant.street,
        building: restaurant.building,
        critical_flag: restaurant.critical_flag,
        record_date: restaurant.record_date,
      };
    }).filter(restaurant => restaurant.dba && restaurant.dba.trim() !== '');
    setFilteredRestaurants(mappedRestaurants);
  };
  const handleSortClick = async () => {
    const restaurants = await fetchRestaurants(city, searchTerm);
    const sortedRestaurants = restaurants.sort((a, b) => {
      return sortOrder === 'asc'
        ? new Date(a.inspection_date) - new Date(b.inspection_date)
        : new Date(b.inspection_date) - new Date(a.inspection_date);
    });
    setFilteredRestaurants(sortedRestaurants);
  };

  return (
    <div className="city-page">
      <h1>NYC Restaurants</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          placeholder={`Search restaurants by name...`}
        />
        <button onClick={handleSearchClick}>Search</button>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Sort by inspection date
        </button>
      </div>
      {searchTerm ? (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              restaurant={restaurant}
              city={city}
            />
          ))}
        </div>
      ) : (
        <RestaurantList />
      )}
    </div>
  );
  
};

export default CityPage;
