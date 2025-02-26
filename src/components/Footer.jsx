import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h5>Our Company</h5>
          <ul>
            <li><a href="#ourStory">Our Story</a></li>
            <li><a href="#joinOurTeam">Join our team</a></li>
            <li><a href="Leave Management">Leave Management</a></li>
            <li><a href="Payroll">Payroll</a></li>
            <li><a href="Talent Management">Talent Management</a></li>
            <li><a href="Compensation">Compensation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Our Social</h5>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.Twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://www.youtube.com">YouTube</a></li>
            <li><a href="https://www.tiktok.com">TikTok</a></li>  
          </ul>
        </div>
        <div className="footer-column">
          <h5>HR Management</h5>
          <ul>
            <li><a href="https://www.itunes.com">iTunes Store</a></li>
            <li><a href="https://www.googleplay.com">Google Play Store</a></li>
          </ul>
        </div>
    </div>
     
  
      <div className="footer-bottom">
        <p>©2025. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;