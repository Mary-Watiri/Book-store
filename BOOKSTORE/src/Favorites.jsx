// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FavoriteBooks from './FavoriteBooks'; // Importing FavoriteBooks component

function Favorites() {
  // State for managing favorite books
  const [favorites, setFavorites] = useState([]);

  // Function to remove a book from favorites
  const removeFromFavorites = (bookId) => {
    // Filter out the book with the given ID from favorites
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      {/* Heading for favorites section */}
      <h2>Favorites</h2>
      {/* Render FavoriteBooks component with favorites and removeFromFavorites function */}
      <FavoriteBooks favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
}

export default Favorites;
