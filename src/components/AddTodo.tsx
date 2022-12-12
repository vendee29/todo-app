import * as React from 'react';
import Button from './Button';
import { Task } from '../App';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContext';

import "./AddTodo.css";

const AddTodo = (): JSX.Element => {

  const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;

  const [enteredTodo, setEnteredTodo] = React.useState('');

  const submitHandler = (event: any) => {
    event.preventDefault();
    
    if(enteredTodo.trim().length === 0) return;

    const newTodo: Task = {
      id: Math.random(),
      value: enteredTodo,
      done: false
    }
    setTodos([...todos, newTodo]);
    // setTodos((prevTodos: Task[]) => [...prevTodos, newTodo]);
    setEnteredTodo('');
  }

  const inputHandler = (event: any) => {
    setEnteredTodo(event.target.value);
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="add-todo"></label>
            <input type="text" id="add-todo" value={enteredTodo} onChange={inputHandler}/>
            <button className='submit-btn'>Add new task</button>
        </form>
    </div>
  )
};

export default AddTodo;