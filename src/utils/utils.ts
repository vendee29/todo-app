import { Task } from "../constants/constants";

export const removeDoneTodos = (todos: Task[], doneTodos: Task[]) => {
    const doneTodosSet = new Set(doneTodos);
    const newTodos = todos.filter((todo) => !doneTodosSet.has(todo));
    return newTodos;
  };