import * as React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from "../App";
import Todo from './Todo';

const TodoList = (): JSX.Element => {
const { todos } = React.useContext(TodoContext) as TodoContextType;

  return (
    <ul>
        {todos.map(todo => {
            return <Todo key={todo.id} value={todo.value}></Todo>
        })}
    </ul>
  )
};

export default TodoList;