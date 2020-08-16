import React from 'react';
import './style.css';
import SideBar from '../SideBar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    // React Fragments
    <div className="container"> 
      {props.children}
      <SideBar />
    </div>
   )

 }

export default Layout