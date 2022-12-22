import * as React from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType, Task } from "../constants/constants";
import { doesArrContainTask } from "../utils/utils";
import Todo from "./Todo";

import "./TodoList.css";

interface Props {
  onChange: (doneTasks: Task[]) => void;
}

const TodoList = (props: Props): JSX.Element => {
  const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;
  const [doneTodos, setDoneTodos] = React.useState<Task[]>([]);

  const checkTodoHandler = (todoValue: string, isChecked: boolean) => {
    if (!isChecked) {
      if (doneTodos.length === 0) return;

      const filteredDoneTodos: Task[] = doneTodos.filter(
        (todo) => todo.value !== todoValue
      );
      setDoneTodos(filteredDoneTodos);
      props.onChange(filteredDoneTodos);

    } else {
      const doneTask = todos.filter(
        (todo) => (todo.value === todoValue) && (isChecked)
      );
      if (doneTask.length === 0) return;

      if (!doesArrContainTask(doneTodos, doneTask[0])) {
        setDoneTodos((prevTodos) => [...prevTodos, doneTask[0]]);
        props.onChange([...doneTodos, doneTask[0]]);
      }
    }
  };

  const deleteTodoHandler = (id: number) => {
    const todosWithoutDeleted: Task[] = todos.filter((todo) => todo.id !== id);
    setTodos(todosWithoutDeleted);
  };

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
