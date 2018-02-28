import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Animals from './pages/Animals/Animals';
import Details from './pages/Details/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/animals" component={Animals} />

            {/* Required Parameter */}
            <Route path="/details/:id" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
