import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './NavBar.jsx'; // Correct import path for Navbar component
import './index.css';

const root = document.getElementById('root');

const renderApp = () => {
  ReactDOM.unstable_createRoot(root).render(
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

renderApp();
