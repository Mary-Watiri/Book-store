import React, { useState } from 'react';

// Define a functional component named AddToCart which takes two props: bookId and addToCart function
function AddToCart({ bookId, addToCart }) {
  // Define a state variable isChecked using the useState hook, initially set to false
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change event
  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
  };

  // Function to handle the add to cart button click event
  const handleAddToCart = () => {
    // Call the addToCart function passed as prop with bookId and isChecked as arguments
    addToCart(bookId, isChecked);
    // Set isChecked to true after adding to cart
    setIsChecked(true);
  };

  // Return JSX for rendering the checkbox and add to cart button
  return (
    <div>
      {/* Checkbox input */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ marginRight: '10px' }}
      />
      {/* Add to Cart button */}
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


// Export the AddToCart component as default
export default AddToCart;
