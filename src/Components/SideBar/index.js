import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import {NavLink} from "react-router-dom";
/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const posts = blogPost.data
    setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer" style={{ width: props.width }}>
      <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src="https://secure.gravatar.com/avatar/d6b0bbd994044c2418fa1baf74b41022?s=300&d=mm&r=g" alt="Shiva Aryal" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>

      </Card>

      <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>Social Media</span>
        </div> 
      </Card>

      <Card style={{marginBottom: '20px', padding:'20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">
          {
            posts.map(post => {
              return (
                <NavLink key={post.id} to={`/post/${post.slug}`}>

                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </Card>

    </div>
   )

 }

export default SideBar