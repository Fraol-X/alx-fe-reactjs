import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          GitHub User Search
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default App;
