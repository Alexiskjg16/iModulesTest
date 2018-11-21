import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import headerbackground from './Images/headerbackground.png';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import imoduleslogo from './Images/imodules-logo.png';
import secondLogo from './Images/secondLogo.png';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={imoduleslogo} alt="iModules Logo" className="logoTag"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <section className="navAcross">
      <li className="nav-item">
        <a className="nav-link" >About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">
          Solutions
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Child Page One</a>
          <a className="dropdown-item" href="#">Child Page Two</a>
          <a className="dropdown-item" href="#">Child Page Three Has A Much Longer Title</a>
          <a className="dropdown-item" href="#">Child Page Four</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Contact</a>
      </li>
    </section>
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
         <img src={secondLogo} alt="iModules Logo"  className="secondLogoTag" />
          <section>
           <h4 className="addressPhone">5101 College Blvd, Leawood, KS 66211</h4>
           <h4 className="addressPhone">913.888.0772 - info@imodules.com</h4>
          </section>
          <button className="donateButton">Donate today</button>
          </section>
          <section>
            <h1 className="baseOfTheFooter">Thanks for completing this test build!</h1>
          </section>
       </footer>
       </div>
      </Router>
    );
  }
}

export default App;
