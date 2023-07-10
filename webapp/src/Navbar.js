import React from 'react';
import "./style/Navbar.css"
function Navbar() {
  return (
    <nav>
      <div className="logo"><b>Logo</b></div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Info</li>
      </ul>
    </nav>
  );
}

export default Navbar;
