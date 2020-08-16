import React from "react";
import './style.css';
import Card from "../../Components/UI/Card";
import SideBar from "../../Components/SideBar";
import RecentPost from "./RecentPosts";
import blogdata from '../../data/blog.json';
import Layout from "../../Components/Layout";

const SideImage = props => {
  return (
    <div style={{height: `${props.height}px`}}>
      <img src={props.src} alt="" />
    </div>
  )
}

const ImageGallery = props => (
  <div className="galleryPost" style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
        <div className="mainImageWrapper">
            <img src={require('../../assets/blogPostImages/' + props.imagesArray[1])} alt="Post Image" />
        </div>
    </section>
    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
        {
            props.imagesArray.map(image => 
              <SideImage 
                height={props.sideImageHeight}
                src={require('../../assets/blogPostImages/' + image)}
                alt="" />
            )
        }
    </section>
</div>
);

const imgAr = blogdata.data.map(post => post.blogImage);

const Home = props => {


  const galleryHeight = 450;

  const galleryStyle = {
    height: galleryHeight+'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card>
        <div className="galleryPost" style={galleryStyle}>
          <ImageGallery 
            largeWidth="70%"
            smallWidth="30%"
            sideImageHeight={sideImageHeight}
            galleryStyle={galleryStyle}
            imagesArray={imgAr}
          />
    
        </div>
    
      </Card>

      <Layout>
        <RecentPost style={{width: '70%'}} />
      </Layout>

    </div>
  )
}

export default Home;