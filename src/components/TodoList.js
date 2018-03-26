// @flow
import React, { Component } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

type singleTodo = {
  _id: number,
  title: string,
  description: string
};

type Props = {
  todoList: Array<singleTodo>,
  handleSubmit: Function
};

export class TodoList extends Component<Props, null> {
  render() {
    let mapTodos = this.props.todoList.map(todo => (
      <Todo key={todo._id} todoInfo={todo} />
    ));
    return (
      <div>
        {mapTodos}
        <TodoInput handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default TodoList;
