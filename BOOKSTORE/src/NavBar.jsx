import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([
    'Detective',
    'Love',
    'Novel',
    'History',
    'Science Fiction',
    'Fantastic'
  ]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://openlibrary.org/search.json?title=percy%20jackson'
      );
      const data = await response.json();
      setBooks(data.docs);
      setFilteredBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleCategoryClick = (category) => {
    const filtered = books.filter(book =>
      book.subject && book.subject.includes(category)
    );
    setFilteredBooks(filtered);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">BOOK-STORE</div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="navbar-categories">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="navbar-books">
        {filteredBooks.map(book => (
          <div key={book.key}>{book.title}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
