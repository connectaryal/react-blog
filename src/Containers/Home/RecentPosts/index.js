import React, { useState, useEffect } from 'react'
import Card from '../../../Components/UI/Card'
import './style.css';
import {NavLink} from "react-router-dom";
import db from "../../../init/Firebase";

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    db.collection('blog')
    .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return(
    <div style={props.style}>
      {
        posts.map(post => {
          return (
            <Card>
              <div className="postImageWrapper">
                  <img src={require('../../../assets/blogPostImages/' + post.blogImage )} alt=""/>
              </div>
              <div style={{textAlign: 'center'}} key={post.id}>
                <span>{post.blogCategory}</span>
                <h2>{post.blogTitle}</h2>
                <span>posted on {post.postedOn} by {post.author} on {post.blogCategory}</span>
                <p>{post.blogText.substring(0, 350)}</p>
                <NavLink key={post.id} to={`/post/${post.slug}`}>
                  <button style={{marginBottom: '20px'}}>Read More</button>     
                </NavLink>
              </div>
            </Card>
          )
        })
      }

      </div>
   )

 }

export default RecentPost