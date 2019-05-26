import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import {Desktop} from "../components/Desktop";

class App extends Component {
  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <Desktop />;
    return <AppHeader />;
  }
}
export default App;
