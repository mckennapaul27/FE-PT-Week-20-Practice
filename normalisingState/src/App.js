import React, { Component } from 'react';
import PT from 'prop-types';
import './App.css';
import Button from './components/Button'
import Todo from './components/Todo';
import AddToDoForm from './components/AddToDoForm';
import {toggleTodo, addToDo} from './stateUpdaters';
import {getInitialState} from './initial-state-seed';

console.log(getInitialState())

class App extends Component {
  state = {
    todos: this.props.todos
  }
  toggleTodo = index => {   
    this.setState({
      todos: toggleTodo(this.state.todos, index)
      // imported
    })
  }
  addTodo = task => { 
    this.setState({
      todos: addToDo(this.state.todos, task)
      // imported
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1 className='title'>Todo List</h1>
        <AddToDoForm addTodo={this.addTodo} />
        <ul>
          {todos.map((todo, i) => {
            return (
              <Todo 
                key={i}
                // preferably use database id's as if array format changes, index will change
                index={i} 
                task={todo.task} 
                completed={todo.completed}
                toggleTodo={this.toggleTodo}
              />
            ); 
          })}
        </ul>
        <Button color='green' onClick={() => console.log('click')}>Click Me</Button>    
        <Button color='red' onClick={() => console.log('click')}>Click Me</Button> 
        <Button onClick={() => console.log('click')}>Default</Button>           
      </div>
    );
  }
}

App.propTypes = {
  todos: PT.arrayOf(
    PT.shape({
      task: PT.string.isRequired,
      completed: PT.bool.isRequired
    })
  ).isRequired
}

export default App;
