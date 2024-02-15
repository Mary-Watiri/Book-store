// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div><MdEmail /><span>Email: info@bookstore.com</span></div>
        <div><MdLocationOn /><span>Location: Ngong Lane , Nairobi Kenya</span></div>
        <div><MdPhone /><span>Phone: 0207643533</span></div>
      </div>
      <div className="leave-message">
        <h3>Leave a Message</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" className="submit-button">Submit</button>

        </form>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/moringaschool" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com/moringaschool" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com/moringaschool" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      
      </div>
    </footer>
  );
}

export default Footer;
