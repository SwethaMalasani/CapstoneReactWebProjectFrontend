// src/components/Navbar.jsx

import React from 'react';

const Navbar = ({ onSearch, onCreate }) => {
  return (
    <nav>
      <input
        type="text"
        placeholder="Search employees..."
        onChange={onSearch}
      />
      <button onClick={onCreate}>Create Employee</button>
    </nav>
  );
};

// Export Navbar as default
export default Navbar;
