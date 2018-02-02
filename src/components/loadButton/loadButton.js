import React from 'react';
import Scroll from 'react-scroll-to-element';
import './loadButton.css';

const LoadButton = (props) => (
  /**
   * LoadButton Component
   * These buttons add functionality to the page
   * The 'LOAD MORE' button triggers a function in the parent component,
   * and has a listener which will stop displaying the button when there are no more
   * tiles to display.
   * The scroll button smooth-scrolls to the element 'App-header'
   */
  <div className="loadButton__body">
    <div className="loadButton__content">
      <div className="load" onClick={props.clicked}>
        {props.LoadNumber < 100 ? (<p className="loadButton--load--more">LOAD MORE</p>):null}
      </div>
      <span className="scroll">
        <Scroll type="class" element="App-header">
          <p className="scroll--button" type="button">^</p>
        </Scroll>
      </span>
    </div>
  </div>
);

export default LoadButton;
