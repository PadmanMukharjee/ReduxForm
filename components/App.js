import React from 'react'
import Todo from './Todo'
import AddTodo from '../containers/TodoContainer'
import ShowTodos from '../containers/ShowTodoContainer'



const App = () => (
  <div className="container">
  <div className="row">
    <AddTodo />   
    <ShowTodos/>
  </div>
  </div>
)

export default App
