import React, { Component } from 'react';
import TodosList from '../containers/TodosList'
import AddTodosInput from '../containers/AddTodosInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-Redux Sample ToDos App</h2>
        </div>
        <div className="App-intro">
          <AddTodosInput />
          <TodosList />
        </div>
      </div>
    );
  }
}

export default App;
