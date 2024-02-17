// import React from 'react';
// import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

// function Footer() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); 
//     // Add your logic here to handle form submission
//     console.log('Form submitted');
//   };

//   return (
//     <footer style={{ border: '2px solid blue',
//                      padding: '10px',
//                      borderRadius: '15px',
//                      marginBottom: '20px',
//                      backgroundColor: 'black',
//                      gap: '3rem',
//                      alignItems: 'center',
//                      textAlign: 'center',
//                      margin: '1rem',
//                      paddingLeft: '4px',
//                      paddingTop: '24px',
//                      paddingInlineStart: '20px' }}>
//       <div className="contact-info" style={{ color: 'white', marginBottom: "20px" }}>
//         <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
//           <MdEmail style={{ color: 'white', marginRight: "10px" }} />
//           <span>Email: info@bookstore.com</span>
//         </div>
//         <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
//           <MdLocationOn style={{ color: 'white', marginRight: "10px" }} />
//           <span>Location: Ngong Lane, Nairobi Kenya</span>
//         </div>
//         <div style={{ color: 'white', display: "flex", alignItems: "center" }}>
//           <MdPhone style={{ color: 'white', marginRight: "10px" }} />
//           <span>Phone: 0207643533</span>
//         </div>
//       </div>
//       <div className="leave-message" style={{ color: 'white', fontSize: '1.4rem', marginBottom: "20px" }}>
//         <h3>Leave a Message</h3>
//         <form onSubmit={handleSubmit} >
//           <label htmlFor="name" >Name:</label>
//           <input type="text" id="name" name="name"  style={{ color: 'black'}} />
//           <label htmlFor="email" >Email:</label>
//           <input type="email" id="email" name="email"style={{ color: 'black'}} />
//           <label htmlFor="message" >Message:</label>
//           <input type="text" id="message" name="message" style={{ color: 'black'}} />
//           <button style={{color: 'black'}} type="submit" className="submit-button" >Submit</button>
//         </form>
//       </div>
//       <div className="social-icons">
//         <a href="https://twitter.com/moringaschool" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px'}}><FaTwitter /></a>
//         <a href="https://facebook.com/moringaschool" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><FaFacebook /></a>
//         <a href="https://instagram.com/moringaschool" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//       </div>
//     </footer>
//   );      
// }

// export default Footer;
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useHistory hook

function Footer() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted');
    // Redirect back to home after successful submission
    navigate('/');
    // Optionally, you can also display an alert here
    alert('Submission successful');
  };

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
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" name="name"  style={{ color: 'black'}} />
          <label htmlFor="email" >Email:</label>
          <input type="email" id="email" name="email"style={{ color: 'black'}} />
          <label htmlFor="message" >Message:</label>
          <input type="text" id="message" name="message" style={{ color: 'black'}} />
          <button style={{color: 'black'}} type="submit" className="submit-button" >Submit</button>
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
