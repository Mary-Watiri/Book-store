import './App.css';
import React, { useState } from 'react';
import BookList from './BookList';
import Cart from './Cart';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import logo from '/home/victor/trial/Book-store/BOOKSTORE/images/library-free-content-librarian-clip-art-cute-bookworm-cliparts-removebg-preview.png';
const initialOptions = {
  "client-id":
    "AW8X5in4VKnvycnAwZHX4n8n1HS4v2pV3LivXjJiHJp4t0yND9yUZAdcxJutwpBj2o4nIfi9a_eO0YKz",
  currency: "USD",
  intent: "capture",
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  return (
    <div>
      <Router>
        <div className='RoutePath'>
          <NavBar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/BookList" element={<BookList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </Router>
      <PayPalScriptProvider options={initialOptions}>
        <Cart cartItems={cartItems} />
      </PayPalScriptProvider>  

      {/* Add your image tag */}
      <div className='image'>
      <img src={logo} alt="Logo" />
      </div>
      
    </div>
  );
}

export default App;
