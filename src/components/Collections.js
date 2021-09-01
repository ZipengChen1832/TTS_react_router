	
import React, {Component} from 'react';
import '../css/Collections.css';
import Movies from './Movies';
 
class Collections extends Component {
  constructor() {
    super();
  }
 
  render() {
    return (
        <div>
        <div className="div-board">
          <div className="row">
            
            <Movies title="Wolf of Wall Street" body="The legend of Jordan Belfort" year="2013" genre="Comedy"/>
            <Movies title="Rainmaker" body="The story of a lawyer" year="1997" genre="Drama"/>
            <Movies title="The Great Gatsby" body="The tradegy of American Dream" year="2013" genre="Drama"/>
            <Movies />
            
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}
 
export default Collections;