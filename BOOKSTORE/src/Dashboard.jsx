import React, { useState, useEffect } from 'react';
import SimpleForm from './SimpleForm.jsx'; // Importing SimpleForm component

function Dashboard({ priceTag, addBookToCart }) {
  // State variables
  const [books, setBooks] = useState([]);
  const [passcode, setPasscode] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch books data from server on component mount
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

  // Function to handle passcode change
  function handlePasscodeChange(event) {
    setPasscode(event.target.value);
  }

  // Function to delete book
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

  // Function to handle add button click
  function handleAddButtonClick() {
    if (passcode === 'victor') {
      setShowForm(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid password');
    }
  }

  // Function to handle form submission
  function handleFormSubmit(formData) {
    const newBook = {
      name: formData.name,
      author: formData.author,
      category: formData.category,
      picture: formData.picture
    };
  
    // Add new book to the server
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
          // Fetch updated books data from the server
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
      {/* Display error message if there is any */}
      {errorMessage && <p>{errorMessage}</p>}
      {/* Render SimpleForm if showForm is true, otherwise render books list */}
      {showForm ? (
        <SimpleForm onSubmit={handleFormSubmit} passcode={passcode} />
      ) : (
        <>
          {/* Render password input and books list */}
          <div className="dashboard">
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={handlePasscodeChange}
            />
            {/* Render books list */}
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={book.title || index} className="dashboardContainer">
                  <img
                    src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                    alt={book.volumeInfo?.title || 'No Title'}
                  />
                  {/* Button to delete book */}
                  <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {/* Button to toggle showForm */}
          <button className='add' onClick={handleAddButtonClick}>ADD</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
