import React, { useEffect, useState } from 'react';

function AddToCart({ bookId, addToCart }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddToCart = () => {
    addToCart(bookId, isChecked);
    setIsChecked(true);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ marginRight: '10px' }}
      />

      <button
        onClick={handleAddToCart}
        style={{
          marginLeft: '25px',
          display: 'inline-block',
          marginBottom: '45px',
          backgroundColor: 'white',
          color: 'black',
          fontWeight: 'bold',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default AddToCart;

