import React, { useState, useEffect } from 'react';
import SimpleForm from './SimpleForm.jsx';

function Dashboard({ priceTag, addBookToCart }) {
  const [books, setBooks] = useState([]);
  const [passcode, setPasscode] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    if (passcode === 'victor') {
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
    } else {
      setErrorMessage('Invalid password');
    }
  }

  function handleAddButtonClick() {
    if (passcode === 'victor') {
      setShowForm(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid password');
    }
  }

  function handleFormSubmit(formData) {
    const newBook = {
      name: formData.name,
      author: formData.author,
      category: formData.category,
      picture: formData.picture
    };
  
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => {
        if (response.ok) {
          console.log('Book added successfully');
          setShowForm(false);
          // Refresh the book list after adding the new book
          fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(data => {
              setBooks(data);
            })
            .catch(error => {
              console.error('Error fetching book ', error);
            });
        } else {
          console.error('Error adding book:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  }

  return (
    <div className='firser'>
      <h2>BOOK LIST</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {showForm ? (
        <SimpleForm onSubmit={handleFormSubmit} passcode={passcode} />
      ) : (
        <>
          <div className="dashboard">
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={handlePasscodeChange}
            />
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={book.title || index} className="dashboardContainer">
                  <img
                    src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                    alt={book.volumeInfo?.title || 'No Title'}
                  />
                  <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button className='add' onClick={handleAddButtonClick}>ADD</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
