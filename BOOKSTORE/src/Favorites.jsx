// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FavoriteBooks from './FavoriteBooks';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const removeFromFavorites = (bookId) => {
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <FavoriteBooks favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
}

export default Favorites;
