// @flow
import React from "react";

type Props = {
  todoInfo: {
    _id: number,
    title: string,
    description: string
  }
};

const Todo = (props: Props) => {
  return (
    <div>
      <h3>{props.todoInfo.title}</h3>
      <p>{props.todoInfo.description}</p>
    </div>
  );
};

export default Todo;
