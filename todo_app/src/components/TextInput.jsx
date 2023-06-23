import React, { useState } from "react";
import Circle from "./elements/Circle";
import {v4 as uuid} from "uuid"

export default function TextInput({ setTodos, setActiveTodos, activeState }) {
  const [todo, setTodo] = useState("");
  const {theme} = useState

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if(activeState === "active") {
        setActiveTodos((prevState) => {
          const id = uuid()
          return [...prevState, {
            todo: todo,
            isCompleted: false,
            id: id
          }];
        })
      }
      setTodos((prevState) => {
        const id = uuid()
        return [...prevState, {
          todo: todo,
          isCompleted: false,
          id: id
        }];
      });
      setTodo("");
    }
  };

  return (
    <form>
      <div className="w-full h-[44px] flex gap-x-4 px-4 py-2 items-center rounded bg-white mt-6">
        <Circle />
        <input
          value={todo}
          onKeyDown={onKeyDownHandler}
          type="text"
          className="h-full w-full outline-none"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  );
}
