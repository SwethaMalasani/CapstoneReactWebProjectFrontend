import React, { useState } from 'react';
import '../styles/ContactUsPage.css';

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to show/hide the popup

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Optionally, handle the form submission logic here (like sending data to the backend)

    // Show the confirmation popup
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Thank you for contacting us!</h3>
            <p>HR will contact you shortly.</p>
            <button className="btn-close" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUsPage;
