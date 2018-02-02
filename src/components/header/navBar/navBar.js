import React, { Component } from 'react';
import './navBar.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class TopBar extends Component {
  /**
   * Navbar Component
   * Dropdown Menu made with react-bootstrap
   * Image tiles used are only placeholders ex: navTile-image1
   */
  render() {
    return(
      <div className="navBar">
        <ul className="navBar__navTitles">
          <DropdownButton
            className="dropdown__custom"
            bsStyle="default"
            title="MY GAIA"
            noCaret
            id="MyGaia">
            <div className="navTile--image1"></div>
            <MenuItem eventKey="1">My Gaia Home</MenuItem>
            <MenuItem eventKey="2">My Playlist</MenuItem>
          </DropdownButton>
          <DropdownButton
            className="dropdown__custom"
            bsStyle="default"
            title="YOGA"
            noCaret
            id="Yoga">
            <div className="navTile--image2"></div>
            <MenuItem eventKey="1">Today in Yoga</MenuItem>
            <MenuItem eventKey="2">All Yoga Practices</MenuItem>
            <MenuItem eventKey="3">Yoga Philosophy</MenuItem>
            <MenuItem eventKey="4">Living Yoga Collection</MenuItem>
            <MenuItem eventKey="5">Morning Ritual Collection</MenuItem>
            <MenuItem eventKey="6">Meditation</MenuItem>
            <MenuItem eventKey="7">Fitness & Pilates</MenuItem>
          </DropdownButton>
          <DropdownButton
            className="dropdown__custom"
            bsStyle="default"
            title="TRANSFORMATION"
            noCaret
            id="Transformation">
            <div className="navTile--image3"></div>
            <MenuItem eventKey="1">Today in Transformation</MenuItem>
            <MenuItem eventKey="2">Spiritual Growth</MenuItem>
            <MenuItem eventKey="3">Alternative Health</MenuItem>
            <MenuItem eventKey="4">Personal Development</MenuItem>
            <MenuItem eventKey="5">Expanded Consciousness</MenuItem>
          </DropdownButton>
          <DropdownButton
            className="dropdown__custom"
            bsStyle="default"
            title="SEEKING TRUTH"
            noCaret
            id="SeekingTruth">
            <div className="navTile--image4"></div>
            <MenuItem eventKey="1">Today in Seeking Truth</MenuItem>
            <MenuItem eventKey="2">Original Programs</MenuItem>
            <MenuItem eventKey="3">Metaphysics</MenuItem>
            <MenuItem eventKey="4">Secrets & Cover Ups</MenuItem>
            <MenuItem eventKey="5">Ancient Origins</MenuItem>
            <MenuItem eventKey="6">Paranormal & Unexplained</MenuItem>
          </DropdownButton>
          <DropdownButton
            className="dropdown__custom"
            bsStyle="default"
            title="FILMS & DOCS"
            noCaret
            id="FilmsDocs">
            <div className="navTile--image5"></div>
            <MenuItem eventKey="1">Today in Films & Docs</MenuItem>
            <MenuItem eventKey="2">Films</MenuItem>
            <MenuItem eventKey="3">Documentaries</MenuItem>
            <MenuItem eventKey="4">Shorts</MenuItem>
            <MenuItem eventKey="5">Series</MenuItem>
          </DropdownButton>
          <a className="dropdown__custom">TOPICS</a>
        </ul>
    </div>
    );
  }
}

export default TopBar;
