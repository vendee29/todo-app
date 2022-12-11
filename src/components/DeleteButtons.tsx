import React from 'react';
import Button from './Button';
import "./DeleteButtons";

const DeleteButtons = () => {
  const deleteDoneTasksHandler = () => {
    console.log('clicked done')
  }

  const deleteTasksHandler = () => {
    console.log('clicked all')
  }

  return (
    <div className='delete-btns'>
        <Button onClick={deleteDoneTasksHandler} text={'Delete done tasks'}></Button>
        <Button onClick={deleteTasksHandler} text={'Delete all tasks'}></Button>
    </div>
  )
}

export default DeleteButtons;
