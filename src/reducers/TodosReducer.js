export default (state = [], action) => {
  switch(action.type) {
    case 'TODO_ADDED':
      return [
        ...state, {
          title: action.title,
          id: action.id,
          done: action.done
        }
      ]
    default:
      return state
  }
}
