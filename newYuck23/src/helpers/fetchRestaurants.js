export const fetchRestaurants = async (city, searchTerm = '') => {
  let url = `https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=dba like '%25${searchTerm}%25'`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
