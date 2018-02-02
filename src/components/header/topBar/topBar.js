import React, { Component } from 'react';
import './topBar.css';

class TopBar extends Component {
  render() {
    return(
      <div className="top__board">
        <div><a className="gaia--name" href="https://www.gaia.com/" target="_blank" rel="noopener noreferrer">Gaia</a></div>
        <div className="right-block">
          <button className="join">JOIN THE TEAM</button>
          <span className="user__name">User Name</span>
          <span className="person--icon"></span>
        </div>
      </div>
    );
  }
}

export default TopBar;
