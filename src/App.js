// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityPage from './components/CityPage';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import './CSS/Theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/nyc" element={<CityPage city="NYC" />} />
          {/* Add other routes here */}
        </Routes>
        <h1>Latest Ratings:</h1>
        <RestaurantList></RestaurantList>
      </div>
    </Router>
  );
}

export default App;
