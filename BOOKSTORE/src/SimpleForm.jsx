import React, { useState } from 'react';

function SimpleForm({ onSubmit, passcode }) {
  // State for form data and password
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    category: '',
    picture: ''
  });
  const [password, setPassword] = useState('');

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if password matches the passcode
    if (password === passcode) {
      // Call onSubmit function with form data
      onSubmit(formData);
    } else {
      // Alert for invalid password
      alert('Invalid password');
    }
  };

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    // Form for adding a book
    <form onSubmit={handleSubmit}>
      {/* Input fields for name, author, category, and picture URL */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Picture URL:
        <input
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
        />
      </label>
      {/* Input field for password */}
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
