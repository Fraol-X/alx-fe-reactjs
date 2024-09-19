import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    setUser(null);
    try {
      const userData = await fetchUserData(query);
      setUser(userData);
    } catch (error) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
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

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="user-info mt-4">
          <img src={user.avatar_url} alt={user.login} className="w-10 h-10" />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
