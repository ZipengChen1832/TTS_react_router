import React, {Component} from 'react';
import '../css/Movies.css';
import protoTypes from 'prop-types';
 

class Movies extends Component {
    constructor() {
        super();
    }
    
    
    render() {
        return (
            <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
}
}

Movies.defaultProps = {
  title: "Title",
  body: "Body",
  year: "Year",
  genre: "Genre"

};

Movies.protoTypes = {
    title: protoTypes.string,
    body: protoTypes.string,
    year: protoTypes.string,
    genre: protoTypes.string
}
export default Movies;