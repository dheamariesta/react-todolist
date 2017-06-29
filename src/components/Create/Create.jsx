import React, { Component } from 'react'; // import classes into our javascript
import PropTypes from 'prop-types';

import uuid from 'uuid';
import './Create.css';


export class Create extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: uuid.v4(),
      todo: ''
    }
  }
  onChange = (e) => {
    let state = this.state;
    state.todo = e.target.value;

    this.setState(state);
  }
  onSubmit = (e) => {
    this.props.createTodo(this.state)
    this.setState({
      id: uuid.v4(),
      todo: ''
    })

  }
  render() {
    return (
      <div className="row create">
        <input type="text"
               className="form-control"
               placeholder="What do you need to do?"
               name="todo"
               onChange = {this.onChange}
               value={this.state.todo}/>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Create</button>
      </div>
    );
  }
}

Create.propTypes = {
  title: PropTypes.string
}

export default Create;
