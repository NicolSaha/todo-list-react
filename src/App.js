import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
        {
            id: uuidv4(),
            title: 'Todo List Item 1',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Todo List Item 2',
            completed: true
        },
        {
            id: uuidv4(),
            title: 'Todo List Item 3',
            completed: false
        }
    ]
  }

  // TOGGLE COMPLETE
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id)  {
              todo.completed = !todo.completed
          }
          return todo;
          }) });
  }

  // DELETE TODO
    deleteTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

// ADD TODO
    addTodo = (title) => {
      const newTodo = {
          id: uuidv4(),
          title,
          completed: false
      }
      this.setState({todos: [...this.state.todos, newTodo]})
    }

  render() {

    return (
      <div className="App">
          <div className="container">
              <Header />
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo = {this.deleteTodo} />
          </div>
     </div>
    );
  }
}

export default App;
