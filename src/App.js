import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Todo List Item 1',
            completed: false
        },
        {
            id: 2,
            title: 'Todo List Item 2',
            completed: true
        },
        {
            id: 3,
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

  render() {

    return (
      <div className="App">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo = {this.deleteTodo} />
      </div>
    );
  }
}

export default App;
