import React, { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default React.memo(function TodoListItem({
  todo,
  deleteTodo,
  toggleTodo,
  modifyTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
}) {
  console.log("TodoListItem");
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const handleModify = () => {
    setIsModify((isModify) => !isModify);
    setModifyText((modifyText) => (modifyText === "" ? todo.text : modifyText));

    if (modifyText.trim() !== "" && todo.text !== modifyText) {
      modifyTodo(todo.id, modifyText);
    }
  };

  return (
    <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
      {!isModify && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </Checkbox>
      )}

      {isModify && (
        <input
          type="text"
          className="todo__modify-input"
          value={modifyText}
          onChange={(event) => setModifyText(event.target.value)}
        />
      )}
      <div className="todo__button-group">
        <Button className="todo__action-button" onClick={handleModify}>
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => deleteTodo(todo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});
