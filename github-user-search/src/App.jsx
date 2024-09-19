import React from 'react';
import SearchInput from './components/Search';  // Make sure this matches the correct casing

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <SearchInput />
      </main>
    </div>
  );
};

export default App;
