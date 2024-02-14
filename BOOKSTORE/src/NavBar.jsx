import React, { useState } from 'react';

const NavBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search books by name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default NavBar;
