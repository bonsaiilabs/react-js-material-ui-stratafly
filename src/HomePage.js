import React from 'react';
import HomeImage from './home-page.svg';

export const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Stratafly</h2>
        <h5>Find The Best Flight Deals With Us</h5>
        <img src={HomeImage} alt="stratafly" />
      </header>
    </div>
  );
};
