import './App.css'
import React, { useState } from 'react';
import BookList from './BookList';
import Cart from './Cart';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer'
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/BookList" element={<BookList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
      <PayPalScriptProvider options={initialOptions}>
       <Cart cartItems={cartItems} />
      </PayPalScriptProvider>  
    </div>
  );
}

export default App;