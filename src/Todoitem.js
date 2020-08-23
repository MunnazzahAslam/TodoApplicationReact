import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {
     getStyle=()=>{
        return{
                textDecoration: this.props.todo.completed ?'line-through' : 'none',
                backgroundColor: '#f4f4f4',
                padding : '10px',
                borderBottom: '6px #ffffff solid',
            };
        };
        
        render() {
            const { id , title } = this.props.todo;
            return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {" "}
                {title}
                <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

Todoitem.propTypes={
    todo: propTypes.object.isRequired
  }

  const btnStyle={
      background: 'red',
      borderRadius: '50%',
      border:'none',
      padding: '5px 8px',
      color: 'white',
      cursor: 'pointer',
      float: 'right'
  }

  export default Todoitem;

