import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    immer((set) => ({
      todos: [],

      addTodo: (text) =>
        set((state) => {
          state.todos.push({
            id: Date.now(),
            text,
            completed: false,
          });
        }),

      toggleTodo: (id) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.completed = !todo.completed;
          }
        }),

      modifyTodo: (id, text) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.text = text;
          }
        }),

      deleteTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
    })),
    {
      name: "todo-storage",
    }
  )
);
