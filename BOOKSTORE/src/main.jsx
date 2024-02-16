import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for creating roots
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the CSS file for styling

// Creating a root element using ReactDOM.createRoot and rendering the App component within it
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the App component with React.StrictMode for additional development mode checks and warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

