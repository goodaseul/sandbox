import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { useTodoAction } from "../context/todo/useTodo";

export default function TodoEditor() {
  const [text, setText] = useState("");
  const { addTodo } = useTodoAction();
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
