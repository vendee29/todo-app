import * as React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import DeleteButtons from "./components/DeleteButtons";

import { TodoContext } from "./contexts/TodoContext";
import { Task, tasks } from "./constants/constants";
import { removeDoneTodos } from "./utils/utils";

import "./App.css";

const App = (): JSX.Element => {
  const [todos, setTodos] = React.useState<Task[]>(tasks);
  const [doneTodos, setDoneTodos] = React.useState<Task[]>([]);

  const deleteHandler = (text: string) => {
    if (text === "all-tasks") {
      setTodos([]);
    } else if (text === "done-tasks") {
      setTodos(removeDoneTodos(todos, doneTodos));
    }
  };

  const doneTasksHandler = (doneTasks: Task[]) => {
    setDoneTodos(doneTasks);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTodo />
        <TodoList onChange={doneTasksHandler} />
      </TodoContext.Provider>
      <DeleteButtons onDelete={deleteHandler} />
    </div>
  );
};

export default App;
