import { Task } from "../constants/constants";

export const removeDoneTodos = (todos: Task[], doneTodos: Task[]) => {
  const doneTodosSet = new Set(doneTodos);
  const newTodos = todos.filter((todo) => !doneTodosSet.has(todo));
  return newTodos;
};

export const doesArrContainTask = (arr: Task[], task: Task) => {
  const filtered = arr.filter((todo) => todo.value === task.value);
  if (filtered.length === 0) return false;
  return true;
};
