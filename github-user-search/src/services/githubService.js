import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (query, location, minRepos, page = 1) => {
  try {
    // Constructing the query string
    const searchQuery = `${query}${location ? `+location:${location}` : ""}${
      minRepos ? `+repos:>${minRepos}` : ""
    }`;

    const response = await axios.get(BASE_URL, {
      params: {
        q: searchQuery,
        page: page,
        per_page: 30, 
      },
    });

    return response.data.items; // Return only the users list (items)
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};