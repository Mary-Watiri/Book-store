// SimpleForm.jsx
import React, { useState } from 'react';

function SimpleForm({ onSubmit }) {
  // Define state for form data
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    category: '',
    picture: ''
  });

  // Handle change in input fields
  const handleChange = event => {
    // Extract name and value from the event target
    const { name, value } = event.target;
    // Update form data state based on the changed field
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = event => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Call onSubmit function with the form data as argument
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for Name */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      {/* Input field for Author */}
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      {/* Input field for Category */}
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      {/* Input field for Picture URL */}
      <label>
        Picture URL:
        <input
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
        />
      </label>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
