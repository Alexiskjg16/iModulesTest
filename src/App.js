import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav className="App-header">
          <header> imodules </header>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Solutions</Link></li>
            <li><Link to="/">News</Link></li>
            <li><Link to="/">Events</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
        <img alt="headerimg"></img>
        <section>
          <menu>
            <Link to="/">Our Technology</Link>
            <Link to="/">The Client Experience</Link>
            <Link to="/">Leadership</Link>
            <Link to="/">Partners</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact Us</Link>
          </menu>
        <section>
          <h1>Main Header Sits Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>Secondary Content Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        </section>
        <section>
          <img alt="support student success"></img>
          <img alt="upcoming campus events"></img>
          <img alt="read alumni stories"></img>
        </section>
       <footer>
         <section>
          <h3>iModules</h3>
          <section>
           <h4>5101 College Blvd, Leawood, KS 66211</h4>
           <h4>913.888.0772 - info@imodules.com</h4>
          </section>
          <button>Donate today</button>
          </section>
          <section>
            <h1>Thanks for completing this test build!</h1>
          </section>
       </footer>
       </div>
      </Router>
    );
  }
}

export default App;
