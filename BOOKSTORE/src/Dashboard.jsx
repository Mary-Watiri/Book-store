import React, { useState, useEffect } from 'react';
import SimpleForm from './SimpleForm.jsx'; // Importing the SimpleForm component

function Dashboard({ priceTag, addBookToCart }) {
  // State hooks for managing books, passcode, form visibility, and error message
  const [books, setBooks] = useState([]); // Holds the fetched books data
  const [passcode, setPasscode] = useState(''); // Holds the passcode entered by the user
  const [showForm, setShowForm] = useState(false); // Controls the visibility of the form
  const [errorMessage, setErrorMessage] = useState(''); // Holds error message for invalid passcode

  // Fetch books data from the server when the component mounts
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

  // Function to handle adding a book to the cart
  function handleAddBookToCart(bookId) {
    addBookToCart(bookId);
  }

  // Function to handle passcode change
  function handlePasscodeChange(event) {
    setPasscode(event.target.value);
  }

  // Function to handle deleting a book
  function handleDeleteBook(bookId) {
    // Check if the passcode is correct
    if (passcode === 'victor') {
      // If passcode is correct, send a DELETE request to the server to delete the book
      fetch(`http://localhost:3000/items/${bookId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // If book is deleted successfully, update the books state to remove the deleted book
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
      // If passcode is incorrect, set an error message
      setErrorMessage('Invalid password');
    }
  }

  // Function to handle add button click
  function handleAddButtonClick() {
    // Check if the passcode is correct
    if (passcode === 'victor') {
      // If passcode is correct, show the form and clear error message
      setShowForm(true);
      setErrorMessage('');
    } else {
      // If passcode is incorrect, set an error message
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

    // Send a POST request to the server to add the new book
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => {
        if (response.ok) {
          // If book is added successfully, hide the form and refresh the books list
          console.log('Book added successfully');
          setShowForm(false);
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
      {/* Dashboard header */}
      <h2 style={{textAlign: 'center'}}>DASHBOARD</h2>
      {/* Display error message if any */}
      {errorMessage && <p>{errorMessage}</p>}
      {/* Render form if showForm is true, otherwise render book list and add button */}
      {showForm ? (
        <SimpleForm onSubmit={handleFormSubmit} passcode={passcode} />
      ) : (
        <>
          <div className="dashboard">
            {/* Passcode input field */}
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={handlePasscodeChange}
            />
            {/* Render books */}
            {books.length > 0 ? (
              books.map((book, index) => (
                <div key={book.title || index} className="dashboardContainer">
                  {/* Display book cover */}
                  <img
                    src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                    alt={book.volumeInfo?.title || 'No Title'}
                  />
                  {/* Delete button */}
                  <button style={{backgroundColor:"white",color:"black"}} onClick={() => handleDeleteBook(book.id)}>Delete</button>
                </div>
              ))
            ) : (
              // If no books found, display loading message
              <p>Loading...</p>
            )}
          </div>
          {/* Add button */}
          <button className='add' onClick={handleAddButtonClick}>ADD</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
