// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function FavoriteBooks({ favorites, removeFromFavorites }) {
  return (
    <div>
      <h2>Favorite Books</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <ul>
          {favorites.map((book) => (
            <li key={book.id}>
              {book.title} 
              <button onClick={() => removeFromFavorites(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

FavoriteBooks.propTypes = {
  favorites: PropTypes.array.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

export default FavoriteBooks;
