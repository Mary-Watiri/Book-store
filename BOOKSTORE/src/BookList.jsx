import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';

function BookList({ addToCart }) {
  // State to store books data
  const [books, setBooks] = useState([]);

  // Fetch books data from server when component mounts
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        console.log(data); // Logging fetched data
      })
      .catch(error => {
        console.error('Error fetching book data:', error); // Handling fetch errors
      });
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div>
      {/* Book list heading */}
      <h2 style={{ color: 'black', fontSize: '40px', marginBottom: '10px' }}>BOOK LIST</h2>
      {/* Display loading message while fetching data */}
      {books.length > 0 ? (
        // Grid layout for displaying books
        <div
          style={{
            border: '5px solid white',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '9px',
            color: 'black',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'center',
            margin: '1rem',
            paddingLeft: '4px',
            paddingTop: '24px',
            paddingInlineStart: '20px',
            height: "700px"
          }}
        >
          {/* Map through fetched books and render each */}
          {books.map((book, index) => (
            <div
              key={index}
              style={{
                border: '1px solid gray',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              {/* Display book title, handling if title is unknown */}
              <h3>{book.volumeInfo?.title || 'Unknown Title'}</h3>
              {/* Display book authors, handling if authors are unknown */}
              <h4>{book.volumeInfo?.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</h4>
              {/* Display book price, handling if price is not available */}
              <p>
                Price: {book.saleInfo?.listPrice?.amount ?? book.saleInfo?.specifiedPrice?.amount ?? "Not for Sale"}{" "}
                {book.saleInfo?.listPrice?.currencyCode ?? book.saleInfo?.specifiedPrice?.currencyCode}
              </p>
              {/* Display book thumbnail image */}
              <img
                src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                alt={book.volumeInfo?.title || 'No Title'}
                style={{ maxWidth: '200px' }}
              />
              {/* Component to add book to cart */}
              <AddToCart bookId={book.id} addToCart={addToCart} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p> // Display loading message if books data is not available yet
      )}
    </div>
  );
}

export default BookList;
