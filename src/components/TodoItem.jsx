import React, { useContext, useEffect, useState } from "react";
import crossLogo from "../assets/images/icon-cross.svg";
import crossLogo2 from "../assets/images/icon-cross2.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "../App";

export default function TodoItem({ todo, setTodos, activeState, pickedFunc, ...props }) {
  const [isChecked, setIsChecked] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const { theme } = useContext(ThemeContext);

  const onClickHandler = (id) => {
    setIsChecked((prevState) => !prevState);
    setTodoId(id);
  };

  useEffect(() => {
    setTodos((prevState) => {
      return prevState.map((data) => {
        if (data.id === todoId) {
          data.isCompleted = !data.isCompleted;
        }
        return data;
      });
    });
  }, [todoId, isChecked, activeState]);

  const onDeleteHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((data) => data.id !== id);
    });
  };

  // console.log("Checked: ", isChecked)

  return (
    <div {...props} className="flex items-center py-4 px-4 justify-between gap-x-3 border-b-2 border-opacity-20 border-neutral-light-dark-grayish-blue">
      <button
        onClick={() => onClickHandler(todo.id)}
        className={twMerge("flex justify-center items-center h-7 w-7 rounded-full border border-neutral-light-very-light-grayish-blue ", isChecked || todo.isCompleted ? "bg-check-bg" : "")}
      >
        {(isChecked || todo.isCompleted) && <img src={checkIcon} alt="" />}
      </button>
      <p className={twMerge("flex-grow", theme == "light" ? "text-neutral-light-very-dark-grayish-blue" : "text-neutral-dark-light-grayish-blue-hover")}>{todo.todo}</p>
      <button onClick={() => onDeleteHandler(todo.id)} className="inline-block">
        <img src={theme == "light" ? crossLogo : crossLogo2} alt="" />
      </button>
    </div>
  );
}
