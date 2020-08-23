import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {
     getStyle=()=>{
        return{
                textDecoration: this.props.todo.completed ?'line-through' : 'none',
                backgroundColor: '#f3f4f4',
                padding : '10px',
                borderBottom: '6px #ccc solid',
            };
        };
        
        render() {
            const { id , title } = this.props.todo;
            return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {" "}
                {title}</p>
            </div>
        );
    }
}

Todoitem.propTypes={
    todo: propTypes.object.isRequired
  }

  export default Todoitem;

