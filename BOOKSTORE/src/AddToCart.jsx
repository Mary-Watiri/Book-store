import React from 'react';

function AddToCart({ bookId, addToCart }) {
  const handleAddToCart = () => {
   
    addToCart(bookId);
  };

  return (
    <button onClick={handleAddToCart} style={{ marginLeft: '25px', display: 'block', marginBottom: '45px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
  ); 
}

export default AddToCart;