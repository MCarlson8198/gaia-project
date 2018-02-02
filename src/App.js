import React, { Component } from 'react';
import './App.css';
import Tiles from './containers/tiles/tiles';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  /**
   * App Component
   This is the root component, remdered via React-DOM in index.js
   */
  render() {
    return (
      <div className="App">
        <Header />
        <Tiles />
        <Footer />
      </div>
    );
  }
}

export default App;
