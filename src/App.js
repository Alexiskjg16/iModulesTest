import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import headerbackground from './Images/headerbackground.png';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import imoduleslogo from './Images/imodules-logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav className="App-header">
          <img src={imoduleslogo} alt="iModules Logo" className="logoTag"/>
            <Link to="/">About</Link>
            <Link to="/">Solutions</Link>
            <Link to="/">News</Link>
            <Link to="/">Events</Link>
            <Link to="/">Contact</Link>
        </nav>
        <img src={headerbackground} alt="headerimg" className="headerImg"/>
        <section className="bodyContent">
          <menu className="sideList">
            <Link to="/" className="sideLinks">Our Technology</Link>
            <Link to="/" className="sideLinks">The Client Experience</Link>
            <Link to="/" className="sideLinks">Leadership</Link>
            <Link to="/" className="sideLinks">Partners</Link>
            <Link to="/" className="sideLinks">Careers</Link>
            <Link to="/" className="sideLinks">Contact Us</Link>
          </menu>
        <section className="paragraphsBody">
          <h1>Main Header Sits Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>SECONDARY CONTENT HEADER</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        </section>
        <section>
          <img src={image1} alt="support student success" />
          <img src={image2} alt="upcoming campus events" />
          <img src={image3} alt="read alumni stories" />
        </section>
       <footer className="wholeFooter">
         <section className="mainPartFooter">
         <img src={imoduleslogo} alt="iModules Logo"  className="logoTag" />
          <section>
           <h4>5101 College Blvd, Leawood, KS 66211</h4>
           <h4>913.888.0772 - info@imodules.com</h4>
          </section>
          <button className="donateButton">Donate today</button>
          </section>
          <section className="baseOfTheFooter">
            <h1>Thanks for completing this test build!</h1>
          </section>
       </footer>
       </div>
      </Router>
    );
  }
}

export default App;
