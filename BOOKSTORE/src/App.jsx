import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [pageTitle] = useState("Book App");

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

  return (
    <>
      <header>
        <h1 style={{ textAlign: 'left' }}>{pageTitle}</h1>
      </header>
      <NavBar handleSearch={handleSearch} />

      <div>
        <h2>Books</h2>
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
