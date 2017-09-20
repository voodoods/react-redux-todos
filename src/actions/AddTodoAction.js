import { TODO_ADDED } from './ActionTypes'

let nextTodoId = 0

export const addTodo = (todo) => {
  return {
    type: TODO_ADDED,
    title: todo.title,
    id: nextTodoId++,
    done: false,
    todo
  }
}