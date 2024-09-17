import React, { useState } from 'react';
import { searchUsers } from '../services/githubApi';

const Search = () => { 
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return; 
    setLoading(true);
    setError('');
    setUsers([]);
    
    try {
      const response = await searchUsers(query);
      setUsers(response.data.items);
    } catch (error) {
      setError('Error fetching GitHub users. Please try again.');
    } finally {
      setLoading(false);
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

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          <h3>Search Results:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border p-2 my-2">
                <img src={user.avatar_url} alt={user.login} className="w-10 h-10 inline-block mr-2" />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
