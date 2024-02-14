import React, { useState, useEffect } from 'react';

function Dashbord({ priceTag, addBookToCart }) {
  const [books, setBooks] = useState([]);
  const [passcode, setPasscode] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching book ', error);
      });
  }, []);

  function handleAddBookToCart(bookId) {
    addBookToCart(bookId);
  }

  function handlePasscodeChange(event) {
    setPasscode(event.target.value);
  }

  function handleDeleteBook(bookId) {
    if (passcode !== 'victor') {
      console.error('Error: Invalid passcode');
      return;
    }

    fetch(`http://localhost:3000/items/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Book deleted successfully');
          setBooks(books.filter(book => book.id !== bookId));
        } else {
          console.error('Error deleting book:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error deleting book:', error);
      });
  }

  return (
    <div>
      <h2>BOOK LIST</h2>
      {books.length > 0 ? (
        <div className="dashboard">
          <input
            type="password"
            placeholder="Enter passcode"
            value={passcode}
            onChange={handlePasscodeChange}
          />
          {books.map((book, index) => (
            <div
              key={book.title || index}
              className="dashboardContainer"
            >
              <img
                src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                alt={book.volumeInfo?.title || 'No Title'}
              />
              <button
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashbord;