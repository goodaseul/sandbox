import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return {
        todo: {
          todos: JSON.parse(saved),
        },
      };
    }
  } catch {
    console.error("로컬 스토리지 로드 실패");
  }
};
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  preloadedState: loadFromLocalStorage(),
});

const saveToLocalStorage = (currentTodos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

let previousTodos = store.getState().todo.todos;
store.subscribe(() => {
  // 상태가 변경될 때마다 항상 호출
  const currentTodos = store.getState().todo.todos;
  if (previousTodos !== currentTodos) {
    previousTodos = currentTodos;
    saveToLocalStorage(currentTodos);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
