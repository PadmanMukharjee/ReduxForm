import ShowTodo from '../components/ShowTodo'

import { connect } from 'react-redux'
import { addTodo,getTodo } from '../actions'


function mapStateToProps(state){
    return{
        todos:state.todos
    }
}

let ShowTodos = connect(mapStateToProps)(ShowTodo)

export default ShowTodos