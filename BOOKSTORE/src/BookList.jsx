import React, { useState, useEffect } from "react";
import AddToCart from "./AddToCart"; // Importing the AddToCart component

function BookList({ addToCart }) {
  // State hooks for managing books, filteredBooks, search term, and selected category
  const [books, setBooks] = useState([]); // Holds the fetched books data
  const [filteredBooks, setFilteredBooks] = useState([]); // Holds the filtered books based on search term and category
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search term entered by the user
  const [selectedCategory, setSelectedCategory] = useState("All"); // Holds the selected category filter

  // Fetch books data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the books state
        setBooks(data);
        // Initially, set filteredBooks to all books
        setFilteredBooks(data);
        // Logging fetched data
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error); // Handling fetch errors
      });
  }, []);

  // Filter books based on search term and selected category whenever searchTerm or selectedCategory changes
  useEffect(() => {
    let filtered = books.filter((book) =>
      book.volumeInfo && book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // If a specific category is selected, filter the books based on that category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (book) =>
          book.volumeInfo.categories &&
          book.volumeInfo.categories.includes(selectedCategory)
      );
    }

    // Set the filtered books to the state
    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, books]);

  // Handle change in the search input field
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category change when a category button is clicked
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Search input field */}
      <div style={{ marginBottom: "15px" ,backgroundColor: 'black'}}>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            backgroundColor: 'black',
            color:'white',
            width:'50%',
            marginLeft: '25rem',
            marginBottom:'4rem',
            marginTop: '2rem'
          }}
        />
        {/* Display category buttons */}
        <div style={{ display: "flex" }}>
          {/* Render category buttons */}
          <CategoryButton
            category="All"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="Christian saints"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="Religion"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="Fiction"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="English language"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="Social science"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <CategoryButton
            category="Juvenile Fiction"
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>

      {/* Book list */}
      <h2 style={{ color: "black", fontSize: "40px", marginBottom: "10px" }}>
        BOOK LIST
      </h2>
      {/* Display books */}
      {filteredBooks.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            backgroundColor:'black'
          }}
        >
          {/* Map through filtered books and render each book */}
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                color: "white",
              }}
            >
              {/* Display book details */}
              <h3>{book.volumeInfo?.title || "Unknown Title"}</h3>
              <h4>
                {book.volumeInfo?.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown Author"}
              </h4>
              <p>
                Price:{" "}
                {book.saleInfo?.listPrice?.amount ??
                  book.saleInfo?.specifiedPrice?.amount ??
                  "Not for Sale"}{" "}
                {book.saleInfo?.listPrice?.currencyCode ??
                  book.saleInfo?.specifiedPrice?.currencyCode}
              </p>
              <img
                src={book.volumeInfo?.imageLinks?.thumbnail || ""}
                alt={book.volumeInfo?.title || "No Title"}
                style={{ maxWidth: "200px" }}
              />
              {/* AddToCart component */}
              <AddToCart bookId={book.id} addToCart={addToCart} />
            </div>
          ))}
        </div>
      ) : (
        // If no books found, display a message
        <p>No books found</p>
      )}
    </div>
  );
}

// CategoryButton component to render category buttons
const CategoryButton = ({
  category,
  handleCategoryChange,
  selectedCategory,
}) => {
  return (
    <button
      onClick={() => handleCategoryChange(category)}
      style={{
        padding: "8px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: 'black', 
        marginRight: "10px",
        cursor: "pointer",
        
      }}
    >
      {category}
    </button>
  );
};

export default BookList;
