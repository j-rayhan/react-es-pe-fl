// @flow
import React, { Component } from "react";
import { findDOMNode } from "react-dom";

type Props = {
  handleSubmit: Function
};

type State = {
  title: string,
  description: string
};
export class TodoInput extends Component<Props, State> {
  state = {
    title: "",
    description: ""
  };
  handleSubmit = () => {
    let newObj = {
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value
    };
    this.props.handleSubmit(newObj);
  };
  render() {
    return (
      <div>
        <label>Title : </label>
        <input type="text" ref="title" />
        <br />
        <br />
        <label>Description : </label>
        <input type="text" ref="description" />
        <br />
        <button onClick={this.handleSubmit.bind()}>Submit</button>
      </div>
    );
  }
}

export default TodoInput;
