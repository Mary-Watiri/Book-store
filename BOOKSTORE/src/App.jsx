import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Checkout from './Checkout';
import Footer from './Footer';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './App.css';
import BookList from './BookList';
import Cart from './Cart';

const initialOptions = {
  "client-id": "AW8X5in4VKnvycnAwZHX4n8n1HS4v2pV3LivXjJiHJp4t0yND9yUZAdcxJutwpBj2o4nIfi9a_eO0YKz",
  currency: "USD",
  intent: "capture",
};

function App() {
  // State variables to manage books data, filtered books, page title, and current category
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [pageTitle] = useState("Book-Store");
  const [cartItems, setCartItems] = useState([]);

  // Fetch books data from the server when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch books data from the server
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/items');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(currentCategory ? data.filter(book => book.categories.includes(currentCategory)) : data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to handle search functionality
  const handleSearch = async (searchTerm) => {
    try {
      // const response = await fetch(`http://localhost:3000/items?title=${searchTerm}`);
      const response = await fetch(`http://localhost:3000/items?title=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to search books');
      }
      const data = await response.json();
      setFilteredBooks(data);
      setCurrentCategory(null); // Reset category filter when searching
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  // Function to handle category selection
  const handleCategory = async (category) => {
    try {
      // const response = await fetch(`http://localhost:3000/items?category=${category}`);
      const response = await fetch(`http://localhost:3000/items`);
      if (!response.ok) {
        throw new Error('Failed to fetch books by category');
      }
      const data = await response.json();
      setFilteredBooks(data);
      setCurrentCategory(category);
    } catch (error) {
      console.error('Error filtering books by category:', error);
    }
  };

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  return (
    <>
      <header>
        <h1 style={{ textAlign: 'left' }}>{pageTitle}</h1>
      </header>
      <NavBar handleSearch={handleSearch} handleCategory={handleCategory} />

      <div className="book-cards">
        {currentCategory && <h2>{currentCategory} Books</h2>}
        <div className="card-container">
          {filteredBooks.map((book) => (
            <div key={book.id} className="card">
              <h3>{book.name}</h3>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              {/* Add more book details as needed */}
            </div>
          ))}
        </div>
      </div>

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
