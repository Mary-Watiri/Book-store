import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';

function BookList({ addToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '40px', marginBottom: '10px' }}>BOOK LIST</h2>
      {books.length > 0 ? (
        <div
          style={{
            border: '2px solid blue',
            padding: '10px',
            borderRadius: '15px',
            marginBottom: '20px',
            backgroundColor: 'black',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'center',
            margin: '1rem',
            paddingLeft: '4px',
            paddingTop: '24px',
            paddingInlineStart: '20px',
            
          }}
        >
          {books.map((book, index) => (
            <div
              key={book.title || index}
              style={{
                border: '1px solid gray',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h3>{book.volumeInfo?.title || 'Unknown Title'}</h3>
              <h4>{book.volumeInfo?.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</h4>
              <p>{book.volumeInfo?.description ? book.volumeInfo.description : 'No description available'}</p>
              {book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount ? (
                <p>
                  Price: {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode}
                </p>
              ) : book.saleInfo && book.saleInfo.specifiedPrice && book.saleInfo.specifiedPrice.amount ? (
                <p>
                  Price: {book.saleInfo.specifiedPrice.amount} {book.saleInfo.specifiedPrice.currencyCode}
                </p>
              ) : (
                <p>Price: Unknown</p>
              )}
              <img
                src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                alt={book.volumeInfo?.title || 'No Title'}
                style={{ maxWidth: '200px' }}
              />
              <AddToCart bookId={book.id} addToCart={addToCart} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookList; 
