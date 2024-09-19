import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query, location, minRepos, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: `${query}${location ? `+location:${location}` : ''}${minRepos ? `+repos:${minRepos}` : ''}`,
        page: page,
        per_page: 30, 
      },
    });
    return response;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
