import { createContext } from "react";
import { TodoContextType } from "../constants/constants";

export const TodoContext = createContext<TodoContextType | null>(null);
