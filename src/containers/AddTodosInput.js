import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/AddTodoAction'
import { bindActionCreators } from 'redux'  

import './AddTodosInput.css'

class AddTodosInput extends Component {

  constructor() {
    super()

    this.state = {
      todo: {}
    }
  }

  updateText(event) {

    let input = event.target.value
    let todo = { title: input }

    setTimeout(function() {
        this.setState({
          todo: todo
        })
    }.bind(this), 200)

  }

  render() {
    return (
      <div className="AddTodosInput">
        <input type="text" id="todos-textinput" placeholder="What do you want to do?" onChange={(event) => this.updateText(event)} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>
          add to list
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo: addTodo}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodosInput)
