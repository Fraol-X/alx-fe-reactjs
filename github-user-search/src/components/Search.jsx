import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault(); 

    if (!query) return;

    setLoading(true);
    setError('');
    setUsers([]);
    setPage(1);

    try {
      const response = await fetchUserData(query, location, minRepos, 1);
      setUsers(response.data.items); 
      setPage(1);
    } catch (err) {
      setError('Looks like we can’t find any users matching your criteria');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const response = await fetchUserData(query, location, minRepos, page + 1);
      setUsers((prevUsers) => [...prevUsers, ...response.data.items]); 
      setPage(page + 1);
    } catch (err) {
      setError('Looks like we can’t load more results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          <h3>Search Results:</h3>
          <div className="border p-2 my-2">
            {users.map((user) => (
              <div key={user.id} className="border p-2 my-2">
                <img src={user.avatar_url} alt={user.login} className="w-10 h-10 inline-block mr-2" />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {user.login}
                </a>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Repositories: {user.public_repos || 0}</p>
              </div>
            ))}
          </div>
          <button onClick={handleLoadMore} className="mt-4 p-2 bg-blue-500 text-white">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
