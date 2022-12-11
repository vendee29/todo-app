import * as React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import DeleteButtons from "./components/DeleteButtons";
import { TodoContext } from "./contexts/TodoContext";
import "./App.css";

export class Task {
  id: number;
  value: string;
  done: boolean;

  constructor(id: number, value: string, done: boolean = false) {
    this.id = id;
    this.value = value;
    this.done = done;
  }
}

export type TodoContextType = {
  todos: Task[];
  setTodos: (todos: Task[]) => void;
};

const tasks: Task[] = [
  new Task(1, "Buy milk"),
  new Task(2, "Feed the monkey"),
  new Task(3, "Sleep 8 hours"),
];

const App = () => {
  const [todos, setTodos] = React.useState<Task[]>(tasks);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </TodoContext.Provider>
      <DeleteButtons></DeleteButtons>
    </div>
  );
};

export default App;
