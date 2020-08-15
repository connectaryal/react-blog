import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import './style.css';
import SearchIcon from '../../assets/icons/search.svg';

/**
* @author
* @function NavBar
**/

const NavBar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("search");
  }

  const openSearch = () => {
    setSearch( true );
  }

  const searchClass = search ? "searchInput active" : "searchInput";

  return(
    <div className="navbar">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about-us">About</NavLink></li>
          <li><NavLink to="/post">Posts</NavLink></li>
          <li><NavLink to="/contact-us">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="search" className={searchClass} placeholder="Search..."/>
          <img onClick={openSearch} className="search-icon" src={SearchIcon} alt="Search" />
        </form>
      </div>

    </div>
   )

 }

export default NavBar