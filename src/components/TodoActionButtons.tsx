import React from "react";
import "./TodoActionButtons.css";

interface Props {
  onDelete: (event: React.MouseEvent) => void;
  isChecked: (isChecked: boolean) => void;
}

const TodoActionButtons = (props: Props) => {
  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.isChecked(event.target.checked);
  };

  const deleteTaskHandler = (event: React.MouseEvent) => {
    props.onDelete(event);
  };

  return (
    <div className="todo-action-btns">
      <input type="checkbox" onChange={checkboxHandler} />
      <div onClick={deleteTaskHandler} className="delete-btn"></div>
    </div>
  );
};

export default TodoActionButtons;
