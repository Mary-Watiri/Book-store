import './index.css'; // Importing CSS file
import React, { useState } from 'react';
import BookList from './BookList';
import Cart from './Cart';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Importing PayPalScriptProvider
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Router components
import Footer from './Footer';

// Initial options for PayPal integration
const initialOptions = {
  "client-id":
    "AW8X5in4VKnvycnAwZHX4n8n1HS4v2pV3LivXjJiHJp4t0yND9yUZAdcxJutwpBj2o4nIfi9a_eO0YKz",
  currency: "USD",
  intent: "capture",
};

function App() {
  // State for managing cart items and search term
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Function to add a book to the cart
  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  // State for managing selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Router>
        <div className='RoutePath'>
          {/* Navigation Bar */}
          <NavBar selectedCategory={selectedCategory} handleCategorySelect={handleCategorySelect} setSearchTerm={setSearchTerm} />

          {/* Routing Configuration */}
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/BookList" element={<BookList addToCart={addToCart} selectedCategory={selectedCategory} searchTerm={searchTerm} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </Router>

      {/* PayPalScriptProvider for PayPal integration */}
      <PayPalScriptProvider options={initialOptions}>
        <Cart cartItems={cartItems} />
      </PayPalScriptProvider>  
    </div>
  );
}

export default App;
