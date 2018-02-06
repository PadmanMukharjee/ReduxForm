import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { addTodo,getTodo } from '../actions';

const Todo = props =>{  
  const {handleSubmit, pristine,submitting,submitTodo} =props;
  return(
    <div className="container">
   <h1>Todo</h1>
     <form  onSubmit={handleSubmit(submitTodo)}>
      <div className="row col-md-4">      
        <div>
          <Field name="Todo" className="col-md-6 " component="input" type="text" placeholder="Add Todo" />
        </div>
      </div>
       <div className="row col-md-4">
        <button type="submit" className=" btn btn-success" disabled={pristine || submitting}>Add Todo</button>       
      </div>
    </form>
    </div>
   
  )
}

// function mapDispatchToProps  (dispatch){
//   //console.log("mapdispatch");
//   return {
//     submitTodo: (todo) => {
//       console.log("vnbvxmncv"+ todo.Todo);
//       dispatch(addTodo(todo))
//     }
//   }
// }


export default reduxForm({
  form:'Todo',
})(Todo) ;