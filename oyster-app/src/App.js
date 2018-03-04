import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'
import EventButton from './components/EventButton/EventButton'
import Routes from './components/Router/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Routes />
          </div>
      </Router>

      </div>
    );
  }
}

export default App;
