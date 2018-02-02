import React, { Component } from 'react';
import './sort.css';

class sortBy extends Component {
/**
 * sortBy Component
 * This dropdown menu passes the selected value to the function 'passValueToProps'.
 * 'passValueToProps' passes the value to the parent via props and triggers a function
 * in the parent component with the passed value.
 */
  passValueToProps = (e) =>{
    let val = e.target.value;
    this.props.sortBy(val);
  }

  render(){
    return(
      <div className="sorting">
        <select onChange={this.passValueToProps} className="sort__dropdown">
          <option onChange={this.passValueToProps} className="dropdown__custom" key="1" value="Sort By">Sort By</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="2" value="All">All</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="3" value="Coverups">Coverups</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="4" value="Esoteric">Esoteric</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="5" value="Esoteric Healing">Esoteric Healing</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="6" value="New Spirituality">New Spirituality</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="7" value="Phenomenology">Phenomenology</option>
          <option onChange={this.passValueToProps} className="dropdown__custom" key="8" value="Science & Technology">Science & Technology</option>
        </select>
    </div>
    );
  }
}

export default sortBy;
