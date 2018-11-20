import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import headerbackground from './Images/headerbackground.png';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import imoduleslogo from './Images/imodules-logo.png';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      showMenu: false,
    }
  }
  showMyMenu =(event) => {
    event.preventDefault();
    
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={imoduleslogo} alt="iModules Logo" className="logoTag"/>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
          Solutions
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Child Page One</a>
          <a class="dropdown-item" href="#">Child Page Two</a>
          <a class="dropdown-item" href="#">Child Page Three Has A Much Longer Title</a>
          <a class="dropdown-item" href="#">Child Page Four</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
      </li>
      <li>
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
        <img src={headerbackground} alt="headerimg" className="headerImg"/>
        <section className="bodyContent">
        <section className="paragraphsBody">
          <h1 id="mainHeader">Main Header Sits Here</h1>
          <p className="LoremPart">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <Link to="/"> Linked Content Example</Link></p>
          <p id="secondaryHeader">SECONDARY CONTENT HEADER</p>
          <p className="LoremPart">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <menu className="sideList">
            <Link to="/" className="sideLinks">Our Technology</Link>
            <Link to="/" className="sideLinks">The Client Experience</Link>
            <Link to="/" className="sideLinks">Leadership</Link>
            <Link to="/" className="sideLinks">Partners</Link>
            <Link to="/" className="sideLinks">Careers</Link>
            <Link to="/" className="sideLinks">Contact Us</Link>
          </menu>
        </section>
        <section className="threeImages">
          <section className="fullPicture">
          <img src={image1} alt="support student success"/>
          <h3 id="SupportSuccess">Support Student Success</h3>
          </section>
          <section className="fullPicture">
          <img src={image2} alt="upcoming campus events" />
          <h3 id="UpcomingEvents">Upcoming Campus Events</h3>
          </section>
          <section className="fullPicture">
          <img src={image3} alt="read alumni stories" />
          <h3 id="alumni">Read Alumni Stories</h3>
          </section>
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
