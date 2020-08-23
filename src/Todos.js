import React, {Component} from 'react';
import Todoitem from './Todoitem.js';
import propTypes from 'prop-types';

class Todos extends Component{
  render() {
  return this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTask={this.props.delTask}/>
  ));
}}
Todos.propTypes={
  todos: propTypes.array.isRequired
}

export default Todos;