import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
// import { useTodoAction } from "../context/todo/useTodo";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../store/features/todo/todoSlice";
// import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoEditor() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  //   const { addTodo } = useTodoAction();
  //   const dispatch = useDispatch();
  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={handleTodoChange}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
