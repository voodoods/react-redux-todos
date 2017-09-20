import React, { Component } from 'react';
import { connect } from 'react-redux'

import NothingTodoHere from '../nothingtodohere.jpg'
import './TodosList.css'

class TodosList extends Component {

  renderTodos() {

    if (this.props.todos.length === 0) {
      return (
        <li className="todo-item no-todos">
           <img src={NothingTodoHere} alt="Nothing to do here" className="no-todos-banner" />
           <p>
            <span>Enjoy your day :-)</span>
          </p>
        </li>
      )
    }

    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id} className="todo-item">
          <input id={'todo-' + todo.id} className="check-todo" type="checkbox" name={todo.title} />
          <label htmlFor={'todo-' + todo.id}>
            {todo.title}
          </label>
        </li>
      )
    })
  }

  render() {

    return (
      <div className="TodosList">
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosList)
