import * as React from "react";
import TodoActionButtons from "./TodoActionButtons";

import "./Todo.css";

interface Props {
  onDelete: (id: number) => void;
  id: number;
  value: string;
  onChange: (todoValue: string, isChecked: boolean) => void;
}

const Todo = (props: Props): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(false);
  const isCheckedHandler = (isChecked: boolean) => {
    setIsChecked(isChecked);
    props.onChange(props.value, isChecked);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todolist-todo">
      <span className={isChecked ? "done" : "not-done"}>{props.value}</span>
      <TodoActionButtons
        isChecked={isCheckedHandler}
        onDelete={deleteHandler}
      ></TodoActionButtons>
    </li>
  );
};

export default Todo;
