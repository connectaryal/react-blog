import React from 'react';
import './style.css';

const Header = (props) => {
  return (
    <header className="header">
        <nav className="headerMenu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="social-media">
        <a href="#">Social Media</a>
        </div> 
    </header>
  )
}

export default Header
