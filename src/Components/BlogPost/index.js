import React, { useState, useEffect } from 'react';
// import {} from 'react-'
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import db from "../../init/Firebase";

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
const [ posts, setPosts ] = useState([]);
  const [slug, setSlug] = useState('');
  useEffect(() => {
    db.collection('blog')
    .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  // useEffect(()=>{
  //   setSlug(props.match.params.slug);
  // }, [props.match.params.slug])
  // if( post.blogImage === "" ) return null;
  console.log('all posts ::',posts)
  const post = posts.find((post) => post.slug === props.match.params.slug);
  console.log('single post ::',post)
  console.log('Slug ::',slug)
  return (
		<div className="blogPostContainer">
      {!post?<div>loading data ....</div>:
			<Card>
				<div className="blogHeader">
					<span className="blogCategory">{post && post.blogCategory}</span>
					<h1 className="postTitle">{post && post.blogTitle}</h1>
					<span className="postedBy">
						posted on {post&&post.postedOn} by {post&&post.author}
					</span>
				</div>
				<div className="postImageContainer">
          {post&& 
            <img src={require('../../assets/blogPostImages/' + post.blogImage)} alt="Post Image" />
          }
				
				</div>
				<div className="postContent">
          <h3>{post&&post.blogTitle}</h3>
          <p>{post&&post.blogText}</p>
				</div>
			</Card>
}
		</div>
	);

 }

export default BlogPost