import React, { Component } from 'react'; // import classes into our javascript
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import TodoItem from '../TodoItem/TodoItem';
import Create from '../Create/Create';
//import './TodoContainer.css';


export class TodoContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: [],
      display: []
    }
  }

  createTodo = (state) => {


    let newListItem = {};
    newListItem.todo = state.todo;
    newListItem.key = state.id;

    let list = this.state.list;
    list.push(newListItem);

    this.setState({
      list: list,
      display: list
    })
  }

  createTodoItem = () => {
    const todoRows = [];
    this.state.display.forEach((item, index) => {
      todoRows.push(
        <TodoItem value={item.todo} id = {item.key}key={item.key} delete={this.deleteItem}/>
      )
    });

    return todoRows;
  }

  searchItem = (query) => {
    console.log(query);
    let list = this.state.list;
    list = this.state.list.filter((el) => {
      if(el.todo.includes(query)){
        return el;
      }
      return;
    })

    this.setState({
      display: list
    })
  }

  deleteItem = (id) => {

    let list= this.state.list;
    list = list.filter((el) => {
      return el.key != id;
    });


    this.setState({
      list: list,
      display: list
    })
  }
  render() {
    let todo = this.createTodoItem();
    return (
      <div className="container todolist">
        <Search search = {this.searchItem}/>
        {todo}
        <Create createTodo = {this.createTodo}/>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  title: PropTypes.string
}

export default TodoContainer;
