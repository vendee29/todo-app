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

const tasks: Task[] = [
  new Task(1, "Buy milk"),
  new Task(2, "Feed the monkey"),
  new Task(3, "Sleep 8 hours"),
];

const removeDoneTodos = (todos: Task[], doneTodos: Task[]) => {
  const doneTodosSet = new Set(doneTodos);
  const newTodos = todos.filter(todo => !doneTodosSet.has(todo));
  return newTodos;
}

const App = () => {
  const [todos, setTodos] = React.useState<Task[]>(tasks);
  const [doneTodos, setDoneTodos] = React.useState<Task[]>([]);

  const deleteHandler = (text: string) => {
    if(text === 'all-tasks') {
      setTodos([]);
    } else if(text === 'done-tasks') {
      setTodos(removeDoneTodos(todos, doneTodos));
    }
  }

  const doneTasksHandler = (doneTasks: Task[]) => {
    setDoneTodos(doneTasks);
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTodo/>
        <TodoList onChange={doneTasksHandler}/>
      </TodoContext.Provider>
      <DeleteButtons onDelete={deleteHandler}/>
    </div>
  );
};

export default App;
