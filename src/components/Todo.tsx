import * as React from "react";
import TodoActionButtons from "./TodoActionButtons";
import "./Todo.css";

const Todo = (props: { value: string }): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(false);
  const isCheckedHandler = (isChecked: boolean) => {
      setIsChecked(isChecked);
  }

  return (
    <li className="todolist-todo">
      <span className={isChecked ? "done" : "not-done"}>{props.value}</span>
      <TodoActionButtons isChecked={isCheckedHandler}></TodoActionButtons>
    </li>
  );
};

export default Todo;
