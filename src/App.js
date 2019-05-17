import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>Learn Material Design with React</h5>
          <a
            className="App-link"
            href="https://bonsaiilabs.thinkific.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFFFFF' }}
          >
            Learn With BonsaiiLabs
          </a>
        </header>
      </div>
    );
  }
}

export default App;