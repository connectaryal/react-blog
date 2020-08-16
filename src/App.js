import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Containers/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactUs from './Containers/ContactUs';
import Post from './Containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post/:slug" component={Post} />

      </div>
    </Router>
  );
}

export default App;
