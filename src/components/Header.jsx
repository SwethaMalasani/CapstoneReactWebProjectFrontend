import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";


const Header = () => {
  return (
    <header className="header">
      <h1>Employee Management System</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/login">Login</Link></li>
                   {/* <li><Link to="/addemployee">Add Employee</Link></li> */}
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
