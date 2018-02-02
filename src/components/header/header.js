import React, { Component } from 'react';
import TopBar from './topBar/topBar';
import './header.css';
import NavBar from './navBar/navBar';

class Header extends Component {
  /**
   * Header Component
   * Component mock up of Gaia.com site header
   */
  render() {
    return(
      <div className="App-header">
        <TopBar />
        <NavBar />
        <div className="hero__image"></div>
      </div>
    );
  }
}

export default Header;
