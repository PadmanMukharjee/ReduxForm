const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
   // console.log(state);
      return [
        ...state,
        action.text
      ]
      case 'GET_TODO':
      return state
       
    default:
      return state
  }
}

export default todos