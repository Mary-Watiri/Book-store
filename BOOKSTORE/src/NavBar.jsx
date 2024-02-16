import React, { useState } from 'react';


const NavBar = ({ handleSearch, handleCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['Gazetteers', 'Computers', 'Political Science', 'English language', 'Social Science', 'Juvenile Fiction'];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleCategoryClick = (category) => {
    handleCategory(category);
  };

  return (
    <header className="navbar"> {/* Added wrapping header with 'navbar' class */}
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search books by name"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>{category}</button>
        ))}
      </div>
    </header>
  );
};

export default NavBar;