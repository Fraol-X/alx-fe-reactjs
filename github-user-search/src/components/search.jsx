import React, { useState } from 'react';
import { searchUsers } from '../services/githubApi';


const SearchInput = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await searchUsers(query);
      console.log(response.data.items); 
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={query}
        onChange={handleInputChange}
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
