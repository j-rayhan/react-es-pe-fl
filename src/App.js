// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

// let x;
const book = {
  _id: 1,
  name: "hello"
};
// console.log("test");
type Todo = {
  _id: number,
  title: string,
  description: string
};
type State = {
  todos: Array<Todo>,
  counter: number
};

class App extends Component<null, State> {
  handleSubmit = (todo: Todo) => {
    console.log("action submit", todo);
    todo._id = this.state.counter;
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(todo),
        counter: prevState.counter + 1
      };
    });
  };
  state = {
    todos: [
      {
        _id: 1,
        title: "title",
        description: "description"
      }
    ],
    counter: 2
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList
          todoList={this.state.todos}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
