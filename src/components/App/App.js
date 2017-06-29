import React, { Component } from 'react';

import Header from '../Header/Header';

import TodoContainer from '../TodoContainer/TodoContainer';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <Header title="My Todos"/>
        <TodoContainer/>
      </div>
    );
  }
}

export default App;
