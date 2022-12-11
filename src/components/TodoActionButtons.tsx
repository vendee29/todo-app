import React from "react";
import "./TodoActionButtons.css";

const TodoActionButtons = (props: {isChecked: (isChecked: boolean) => void}) => {

  const checkboxHandler = (event: any) => {
    props.isChecked(event.target.checked);
  }

  return (
    <div className="todo-action-btns">
      <input type="checkbox" onChange={checkboxHandler}/>
      <div className="delete-btn">
      </div>
    </div>
  );
};

export default TodoActionButtons;
