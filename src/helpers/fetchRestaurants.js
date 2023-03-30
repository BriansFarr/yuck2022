export const fetchRestaurants = async (searchTerm, page = 0, pageSize = 15) => {
    const query = `%${searchTerm.toUpperCase()}%`; // convert to uppercase
  const url = `https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=starts_with(dba, '${searchTerm}')&$limit=${pageSize}&$offset=${page * pageSize}&$order=inspection_date DESC`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
