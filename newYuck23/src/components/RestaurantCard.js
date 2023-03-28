// components/RestaurantCard.js
const RestaurantCard = ({ restaurant, city }) => {
  if (restaurant.city !== city) {
    // Skip rendering this restaurant if it doesn't belong to the current city
    return null;
  }

  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Health code grade: {restaurant.grade}</p>
      <p>Inspection date: {restaurant.inspection_date}</p>
    </div>
  );
};
export default RestaurantCard;