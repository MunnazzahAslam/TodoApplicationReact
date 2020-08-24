import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './Todos.js';
import Todos from './Todos.js';
import About from './Pages/About.js';
import Header from './Todo/Header.js';
import AddTodo from './AddTodo.js';
//import {v4 as uuid} from "uuid";
import axios from 'axios';

class App extends Component{
   state={
    todos:[]
  };
  
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(res => this.setState({todos: res.data}))
}

   markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  }) });
}
   
  delTask =(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    );
   }
  
  AddTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false})
    .then(res=> this.setState({todos: [...this.state.todos, res.data]}));  
  }

render(){
  return(
  <Router>
  <div className="app">
  <div className="container">
  <Header/>
  <Route exact path="/home" render={props=>(
<React.Fragment>
  < br/>
  <AddTodo AddTodo={this.AddTodo}/>
  <br/>
  <Todos todos={this.state.todos} markComplete={this.markComplete} delTask={this.delTask}/>
</React.Fragment>)}/>
<Route path="/about" component={About}/>
  </div>
  </div>
  </Router>
  );
}}

export default App;
