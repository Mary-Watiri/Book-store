// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function FavoriteBooks({ favorites, removeFromFavorites }) {
  return (
    <div>
      {/* Heading for favorite books */}
      <h2>Favorite Books</h2>
      {/* Render message if there are no favorite books */}
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        // Render list of favorite books
        <ul>
          {/* Map through favorite books and render each */}
          {favorites.map((book) => (
            <li key={book.id}>
              {/* Display book title */}
              {book.title} 
              {/* Button to remove book from favorites */}
              <button onClick={() => removeFromFavorites(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// PropTypes for type checking
FavoriteBooks.propTypes = {
  favorites: PropTypes.array.isRequired, // Array of favorite books
  removeFromFavorites: PropTypes.func.isRequired // Function to remove book from favorites
};

export default FavoriteBooks;
