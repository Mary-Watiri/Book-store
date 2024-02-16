import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ handleSearch, handleCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['Gazetteers', 'Computers', 'Political Science', 'English language', 'Social Science', 'Juvenile Fiction'];

  // Function to handle category click
  const handleCategoryClick = (category) => {
    handleCategory(category);
  };

  return (
    <header className="navbar">
      {/* Category links */}
      <div className="categories">
        {categories.map((category, index) => (
          <Link to={`/booklist?category=${category}`} key={index}>
            <button>{category}</button>
          </Link>
        ))}
      </div>
      {/* Top navigation links */}
     
      <div className="topNav" id='topNav'>
        <Link to="/BookList">Books Available </Link>
        <Link to="/DashBoard">Dashboard</Link>
        <Link to="/Footer">Footer</Link>
        <Link to="/Cart">Basket</Link>
      </div>
    </header>
  );
};

export default NavBar;
