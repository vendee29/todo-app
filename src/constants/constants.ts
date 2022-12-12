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

export const tasks: Task[] = [
  new Task(1, "Buy milk"),
  new Task(2, "Feed the monkey"),
  new Task(3, "Sleep 8 hours"),
];

export type TodoContextType = {
  todos: Task[];
  setTodos: (todos: Task[]) => void;
};
