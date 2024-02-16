import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
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
    <header className="navbar"> 
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
          <Link to={`/booklist?category=${category}`} key={index}>
            <button>{category}</button>
          </Link>
        ))}
        </div>
        <div className="topNav">
        <Link to="/BookList">Books Available </Link>
        <Link to="DashBoard">
          <button>Dashboard</button>
        </Link>
        <Link to="/footer">
          <button>Footer</button>
        </Link>
        <Link to="Cart">
          <button>Basket</button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
