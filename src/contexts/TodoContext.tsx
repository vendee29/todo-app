import { createContext } from "react";
import { TodoContextType } from "../App";

export const TodoContext = createContext<TodoContextType | null>(null);