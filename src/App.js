import React, { Component }  from 'react';
import './App.css';
import './Todos.js';
import Todos from './Todos.js';

class App extends Component{
   state={
    todos:[
      {
        id:1,
        title:"Workout",
        completed:false
      },
      {
        id:2,
        title:"Meditate",
        completed:false
      },
      {
        id:3,
        title:"Breakfast with family",
        completed:false
      },
    ]
  };
  
   markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  }) });
}
   
  delTask =(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  
render(){
  return(
  <div>
  <Todos todos={this.state.todos} markComplete={this.markComplete} delTask={this.delTask}/>
  </div>);
}}

export default App;
