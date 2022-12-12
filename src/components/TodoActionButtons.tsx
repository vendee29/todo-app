import React from "react";
import "./TodoActionButtons.css";

interface Props {
  onDelete: (event: any) => void;
  isChecked: (isChecked: boolean) => void;
}

const TodoActionButtons = (props: Props) => {
  const checkboxHandler = (event: any) => {
    props.isChecked(event.target.checked);
  };

  const deleteTaskHandler = (event: any) => {
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
