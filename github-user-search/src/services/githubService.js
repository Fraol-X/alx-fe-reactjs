import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query, location = '', minRepos = '') => {
  let queryString = `q=${query}`;
  
  if (location) {
    queryString += `+location:${location}`;
  }

  if (minRepos) {
    queryString += `+repos:${minRepos}`;
  }

  const response = await axios.get(`${BASE_URL}?${queryString}`);
  return response;
};
