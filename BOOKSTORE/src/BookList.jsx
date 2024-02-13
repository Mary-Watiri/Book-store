import React, { useState, useEffect } from 'react';

function BookList({ priceTag, addBookToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=language:english`;

    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((response) => {
        setBooks(response.items || []);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  function handlePriceTag(bookId) {
    priceTag(bookId);
  }

  function handleAddBookToCart(bookId) {
    addBookToCart(bookId);
  }

  return (
    <>
    <div>
      <h2 style={{ color: 'white', fontSize: '40px', marginBottom: '10px' }}>BOOK LIST</h2>
      {books.length > 0 ? (
        <div
          style={{
            border: '2px solid blue',
            padding: '10px',
            borderRadius: '15px',
            marginBottom: '20px',
            backgroundColor: 'white',
            display: 'grid',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'center',
            margin: '1rem',
            paddingLeft: '4px',
            paddingTop: '24px',
            paddingInlineStart: '20px',
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                border: '1px solid gray',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h3>{book.volumeInfo.title}</h3>
              <h4>{book.volumeInfo.authors.join(', ')}</h4>
              <p>{book.volumeInfo.description}</p>
              {book.saleInfo && book.saleInfo.listPrice && (
                <p>
                  Price: {book.saleInfo.listPrice.amount}{' '}
                  {book.saleInfo.listPrice.currencyCode}
                </p>
              )}
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                style={{ maxWidth: '200px' }}
              />
              <div>
                <div>
                  <button
                    style={{
                      marginRight: '10px',
                      backgroundColor: 'orange',
                      color: 'black',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handlePriceTag(book.id)}
                  >
                    59 USD
                  </button>
                  <button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleAddBookToCart(book.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default BookList;
