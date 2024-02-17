import React, { useState, useEffect } from "react";
import AddToCart from "./AddToCart";

function BookList({ addToCart }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data); // Initially, set filteredBooks to all books
        console.log(data); // Logging fetched data
      })
      .catch((error) => {
        console.error("Error fetching book data:", error); // Handling fetch errors
      });
  }, []);

  useEffect(() => {
    let filtered = books.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (book) =>
          book.volumeInfo.categories &&
          book.volumeInfo.categories.includes(selectedCategory)
      );
    }

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, books]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
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
          
          <CategoryButton style={{color:'black'}}
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

      <h2 style={{ color: "black", fontSize: "40px", marginBottom: "10px" }}>
        BOOK LIST
      </h2>
      {/* Display loading message while fetching data */}
      {filteredBooks.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            backgroundColor:'black'
          }}
        >
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
              <AddToCart bookId={book.id} addToCart={addToCart} />
            </div>
          ))}
        </div>
      ) : (
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

