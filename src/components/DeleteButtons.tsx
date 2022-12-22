import React from "react";
import Button from "./Button";

import "./DeleteButtons";

interface Props {
  onDelete: (text: string) => void;
}

const DeleteButtons = (props: Props) => {
  
  const deleteDoneTasksHandler = () => {
    props.onDelete("done-tasks");
  };

  const deleteTasksHandler = () => {
    props.onDelete("all-tasks");
  };

  return (
    <div className="delete-btns">
      <Button
        onClick={deleteDoneTasksHandler}
        text={"Delete done tasks"}
      ></Button>
      <Button onClick={deleteTasksHandler} text={"Delete all tasks"}></Button>
    </div>
  );
};

export default DeleteButtons;
