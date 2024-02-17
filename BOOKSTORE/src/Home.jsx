import React from 'react';

// Assuming the image file is located in the same directory as the component
import backgroundImage from '/home/mary/bbb/Book-store/BOOKSTORE/src/Pictures/books.jpeg';

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
        <div>
      <h1>Welcome to BOOK WORM'S</h1>
      </div>
      <p style={{color:"white",fontSize:"2rem"}}>Welcome to the land of stories,where each book is a new adventure waiting to be explored</p>
      <p style={{color:"white",fontSize:"2rem"}}>Explore our products and services</p>
    </div>
  );
}

export default Home;
