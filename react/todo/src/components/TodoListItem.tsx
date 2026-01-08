import React, { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
// import { useTodoAction } from "../context/todo/useTodo";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  modifyTodo,
  toggleTodo,
} from "../store/features/todo/todoSlice";

export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  //   const { toggleTodo, deleteTodo, modifyTodo } = useTodoAction();

  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const handleModify = () => {
    setIsModify((isModify) => !isModify);
    setModifyText((modifyText) => (modifyText === "" ? todo.text : modifyText));

    if (modifyText.trim() !== "" && todo.text !== modifyText) {
      dispatch(modifyTodo({ id: todo.id, text: modifyText }));
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
          onChange={() => dispatch(toggleTodo(todo.id))}
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
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});
