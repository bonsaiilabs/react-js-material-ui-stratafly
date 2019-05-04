import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Stratafly team
          </p>
          <a
            className="App-link"
            href="https://bonsaiilabs.thinkific.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: '#F8E013'}}
          >
            Learn With BonsaiiLabs
          </a>
        </header>
      </div>
    );
  }
}

export default App;
