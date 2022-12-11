import * as React from "react";
import TodoActionButtons from "./TodoActionButtons";

const Todo = (props: { value: string }): JSX.Element => {
  const isCheckedHandler = (isChecked: boolean) => {
      console.log(isChecked);
  }

  return (
    <li>
      <span>{props.value}</span>
      <TodoActionButtons isChecked={isCheckedHandler}></TodoActionButtons>
    </li>
  );
};

export default Todo;
