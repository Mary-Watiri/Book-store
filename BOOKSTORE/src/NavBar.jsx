import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from 'react-icons/fa'; // Importing the basket icon from react-icons/fa

const NavBar = () => {
  return (
    <header className="navbar" style={{ backgroundColor: 'black', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div className="topNav" id="topNav" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/BookList" style={{ textDecoration: 'none', color: 'white' }}>Books Available</Link>
        <Link to="/DashBoard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
        <Link to="/Footer" style={{ textDecoration: 'none', color: 'white' }}>Footer</Link>

        {/* Link to the cart component with a basket icon */}
        <Link to="/Cart" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
        <FaShoppingBasket style={{ marginRight: '5px', color: 'white' }} />
{/* Basket icon */}
  {/* Cart */}
</Link>

      </div>
    </header>
  );
};

export default NavBar;
