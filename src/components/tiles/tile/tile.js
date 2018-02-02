import React from 'react';
import './tile.css';

const tile = (props) => (
  /**
   * tile Component
   * This component recieves props from its parent, and formats the data received
   * The computed Math.round values will work as long as there are values
   * for both thumbsup and thumbsdown.
   */
  <article className="tile__background">
    <div className="tile__image" style={{ backgroundImage: `url(${props.image})` }}></div>
    <div className="tile__bottom">
      <p className="tile__title">{props.title}</p>
      <div className="tile__rating">
        <span className="thumbs__up"></span>&nbsp;
        <span className="tile__fivestar">{Math.round(props.thumbsup / (props.thumbsup + props.thumbsdown)*100)}%</span>
        &nbsp;&nbsp;
        <span className="thumbs__down"></span>&nbsp;
        <span className="tile__fivestar">{Math.round(props.thumbsdown / (props.thumbsup + props.thumbsdown)*100)}%</span>
      </div>
  </div>
  </article>
);

export default tile;
