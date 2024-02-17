import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault(); }
    return (
        <footer style={{ border: '2px solid blue',
        padding: '10px',
        borderRadius: '15px',
        marginBottom: '20px',
        backgroundColor: 'black',
        gap: '3rem',
        alignItems: 'center',
        textAlign: 'center',
        margin: '1rem',
        paddingLeft: '4px',
        paddingTop: '24px',
        paddingInlineStart: '20px' }}>
          <div className="contact-info" style={{ color: 'white', marginBottom: "20px" }}>
            <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
              <MdEmail style={{ color: 'white', marginRight: "10px" }} />
              <span>Email: info@bookstore.com</span>
            </div>
            <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
              <MdLocationOn style={{ color: 'white', marginRight: "10px" }} />
              <span>Location: Ngong Lane, Nairobi Kenya</span>
            </div>
            <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
              <MdPhone style={{ color: 'white', marginRight: "10px" }} />
              <span>Phone: 0207643533</span>
            </div>
          </div>
          <div className="leave-message" style={{ color: 'white', fontSize: '1.4rem', marginBottom: "20px" }}>
            <h3>Leave a Message</h3>
            <form onSubmit={handleSubmit} >
              <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name:</label>
              <input type="text" id="name" name="name" style={{ width: "28rem", marginBottom: '10px', padding: '5px', borderRadius: '.5rem'  }} />
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
              <input type="email" id="email" name="email" style={{ width: '28rem', marginBottom: "10px", padding: '5px', borderRadius: '.5rem'  }} />
              <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message:</label>
              <textarea id="message" name="message" style={{ height: '10rem', width: '40rem', marginBottom: '10px', padding: '5px', borderRadius: '1rem' }}></textarea>
              <button type="submit" className="submit-button" style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px", cursor: "pointer", fontSize: '1rem', marginBottom: '2rem',marginTop: '12rem', borderRadius: '1rem' }}>Submit</button>
            </form>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/moringaschool" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px'}}><FaTwitter /></a>
            <a href="https://facebook.com/moringaschool" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><FaFacebook /></a>
            <a href="https://instagram.com/moringaschool" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </footer>
      );      
}

export default Footer;