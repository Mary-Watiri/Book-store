import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [pageTitle] = useState("Book-Store");
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/items');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:3000/items?name=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to search books');
      }
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleCategory = async (category) => {
    try {
      const response = await fetch(`http://localhost:3000/items?category=${category}`);
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
    </>
  );
}

export default App;
