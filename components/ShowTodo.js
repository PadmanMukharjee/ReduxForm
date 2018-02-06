import React, { Component } from 'react';

class ShowTodo extends Component{
   
    render(){  
        console.log(this.props);      
        return(           
            <div>
            {this.props.todos.map(function (arr, index) {    
                                return (
                                    <ul key={index}>
                                        <li>{arr.Todo}</li>                                       
                                    </ul>
                                )
                            })}
            </div>
        )
    }
    
}

export default ShowTodo;