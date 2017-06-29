import React, { Component } from 'react'; // import classes into our javascript
import PropTypes from 'prop-types';

//import './Search.css';


export class Search extends Component {
  onChange = (e) => {
    let query = e.target.value;

    this.props.search(query);
  }
  render() {
    return (
      <div className="row searchbar">
        <input type="text"
               className="form-control"
               placeholder="Search"
               onChange={this.onChange}
               />
      </div>
    );
  }
}

Search.propTypes = {
  title: PropTypes.string
}

export default Search;
