import Todo from '../components/Todo'

import { connect } from 'react-redux'
import { addTodo,getTodo } from '../actions'


function mdp  (dispatch){
  console.log("mapDispatchtoprops");
  return {
    submitTodo: (todo) => {     
      console.log(todo);
      dispatch(addTodo(todo))
    }
  }
}

let AddTodo = connect(null, mdp)(Todo)

export default AddTodo
