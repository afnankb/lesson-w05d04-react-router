
import React, { Component } from 'react'
import Home from './home';
import Procedures from './Procedures';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
      <nav>
  <Link to="/">Home</Link>{' '}
  
  <Link to="/procedures">Procedures</Link>{' '}
  
  <Link to="/contact">Contact</Link>{' '}
</nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
        
          
    </Router>
    )
  }
} 