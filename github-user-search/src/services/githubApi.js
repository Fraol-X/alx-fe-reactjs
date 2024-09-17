import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export const searchUsers = (query) => {
  return githubApi.get(`/search/users?q=${query}`);
};
