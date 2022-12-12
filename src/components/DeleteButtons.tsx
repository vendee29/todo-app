import React from 'react';
import Button from './Button';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContext';

import "./DeleteButtons";

const DeleteButtons = (props: {onDelete: (text: string) => void }) => {
  // const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;

  const deleteDoneTasksHandler = () => {
    props.onDelete('done-tasks');
  }

  const deleteTasksHandler = () => {
    props.onDelete('all-tasks');
  }

  return (
    <div className='delete-btns'>
        <Button onClick={deleteDoneTasksHandler} text={'Delete done tasks'}></Button>
        <Button onClick={deleteTasksHandler} text={'Delete all tasks'}></Button>
    </div>
  )
}

export default DeleteButtons;
