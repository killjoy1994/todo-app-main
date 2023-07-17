import React, { useContext, useState } from "react";
import Circle from "./elements/Circle";
import {v4 as uuid} from "uuid"
import { ThemeContext } from "../App";
import { twMerge } from "tailwind-merge";

export default function TextInput({ setTodos, setActiveTodos, activeState }) {
  const [todo, setTodo] = useState("");
  const {theme} = useContext(ThemeContext)

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
      <div className={twMerge("w-full h-[44px] flex gap-x-4 px-4 py-2 items-center rounded mt-6", theme === "light" ? "bg-neutral-light-very-light-gray" : "bg-neutral-dark-very-dark-grayish-blue" )}>
        <Circle />
        <input
          value={todo}
          onKeyDown={onKeyDownHandler}
          type="text"
          className={twMerge("h-full w-full outline-none bg-inherit", theme == "light" ? "text-neutral-light-very-dark-grayish-blue" : "text-neutral-dark-light-grayish-blue-hover")}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  );
}
