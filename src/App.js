import React, { Component } from 'react';
import Todos from './Components/Todos';

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

  render() {

    return (
      <div className="App">
          <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
