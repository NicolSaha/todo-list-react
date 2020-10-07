import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';

import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(response => this.setState({ todos: response.data }))
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
      axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
          .then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    }

// ADD TODO
    addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
      })
          .then(response => this.setState({todos: [...this.state.todos, response.data]}));
//TODO: add catch error
    }

  render() {

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo = {this.deleteTodo} />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
