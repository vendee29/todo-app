import { createContext } from "react";
import { Task } from "../App";

export type TodoContextType = {
    todos: Task[];
    setTodos: (todos: Task[]) => void;
  };

export const TodoContext = createContext<TodoContextType | null>(null);