import * as React from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContext";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (): JSX.Element => {
  const { todos } = React.useContext(TodoContext) as TodoContextType;

  return (
    <ul>
      {todos.length > 0
        ? todos.map((todo) => {
            return <Todo key={todo.id} value={todo.value}></Todo>;
          })
        : "No tasks to complete"}
    </ul>
  );
};

export default TodoList;
