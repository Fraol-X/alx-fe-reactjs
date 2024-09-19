import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault(); 

    if (!query) return;

    setLoading(true); 
    setError(''); 
    setUser(null);

    try {
      const response = await fetchUserData(query);
      setUser(response.data); 
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4">
          <h3>Search Results:</h3>
          <div className="border p-2 my-2">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 inline-block mr-2" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {user.login}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
