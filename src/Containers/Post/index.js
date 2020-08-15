import React, { useState } from 'react';
import './style.css';
import Card from '../../Components/UI/Card';
import BlogPost from '../../Components/BlogPost';
import SideBar from '../../Components/SideBar';
import blogPost from '../../data/blog.json';

/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
    <section className="container">
      <BlogPost {...props}/>
      <SideBar />
    </section>
   )

 }

export default Post