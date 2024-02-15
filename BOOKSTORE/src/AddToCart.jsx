import React from "react";

function AddToCart({ bookId, addToCart }) {
  const handleAddToCart = () => {
    addToCart(bookId);
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}

export default AddToCart;
