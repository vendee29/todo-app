import * as React from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContext";
import { Task } from "../App";
import Todo from "./Todo";
import "./TodoList.css";

const doesArrContainTask = (arr: Task[], task: Task) => {
  const filtered = arr.filter((todo) => todo.value === task.value);
  if (filtered.length === 0) return false;
  return true;
};

interface Props {
  onChange: (doneTasks: Task[]) => void;
}

const TodoList = (props: Props): JSX.Element => {
  const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;
  const [doneTodos, setDoneTodos] = React.useState<Task[]>([]);

  const checkTodoHandler = (text: string, isChecked: boolean) => {
    if (!isChecked) {
      if (doneTodos.length === 0) return; // return if there are no done tasks
      const filteredTodos: Task[] = doneTodos.filter(todo => todo.value !== text);
      setDoneTodos(filteredTodos);
      props.onChange(doneTodos);
      return;

    } else {
      const doneTask = todos.filter((todo) => todo.value === text && isChecked);
      if (doneTask.length === 0) return;
      if (!doesArrContainTask(doneTodos, doneTask[0])) {
        setDoneTodos(prevTodo => [...prevTodo, doneTask[0]]);
        props.onChange([...doneTodos, doneTask[0]]);
      }
    }
  };

  const deleteTodoHandler = (id: number) => {
    const todosWithoutDeleted: Task[] = todos.filter(todo => todo.id !== id);
    setTodos(todosWithoutDeleted);
  }

  return (
    <ul>
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <Todo
                id={todo.id}
                key={todo.id}
                value={todo.value}
                onChange={checkTodoHandler}
                onDelete={deleteTodoHandler}
              ></Todo>
            );
          })
        : "No tasks to complete"}
    </ul>
  );
};

export default TodoList;
