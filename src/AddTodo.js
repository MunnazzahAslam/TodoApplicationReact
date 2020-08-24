import React, { Component } from 'react'
import propTypes from 'prop-types';

export class AddTodo extends Component {
    state={
        title:'',
    }

    onChange=(e)=> this.setState({title: e.target.value})    

    onSubmit=(e)=> {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" placeholder="Add Todo" style={{flex:'10', padding:'5px'}} value={this.state.title} onChange={this.onChange}></input>
                <input type="submit" value="Add" className="btn" style={{flex:'1'}}></input>
            </form>
        )
    }
}

AddTodo.propTypes={
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTask: propTypes.func.isRequired,
  }

export default AddTodo
