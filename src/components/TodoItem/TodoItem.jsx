import React, { Component } from 'react'; // import classes into our javascript
import PropTypes from 'prop-types';

//import './TodoItem.css';


export class TodoItem extends Component {
  onCheck = (e) => {
    // if(e.target.checked){
    //   e.target.parentNode.style.textDecoration = "line-through";
    //   console.log(e.target.parentNode);
    // } else {
    //   e.target.parentNode.style.textDecoration = "none";
    //   console.log(e.target.parentNode);
    // }

    if(e.target.checked){
      console.log(this.props.id)
      this.props.delete(this.props.id);
    }
  }
  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" id="blankCheckbox" onChange={this.onCheck}/>{this.props.value}
        </label>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string
}

export default TodoItem;
