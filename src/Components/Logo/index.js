import React from 'react';
import './style.css';
import {NavLink} from "react-router-dom";

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
      <NavLink to="/" >Shiva Aryal</NavLink>
    </div>
   )

 }

export default Logo