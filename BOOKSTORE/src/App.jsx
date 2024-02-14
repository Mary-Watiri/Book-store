
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [pageTitle] = useState("Book App");
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/items');
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
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleCategory = async (category) => {
    try {
      const response = await fetch(`http://localhost:3000/items?category=${category}`);
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

      <div>
        {currentCategory && <h2>{currentCategory} Books</h2>}
        <ol>
          {filteredBooks.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
