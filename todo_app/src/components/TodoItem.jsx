import React, { useState } from "react";
import crossLogo from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { twMerge } from "tailwind-merge";

export default function TodoItem({ todo, setTodos, activeState, pickedFunc }) {
  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = (id) => {
    setIsChecked((prevState) => !prevState);
    setTodos((prevState) => {
      return prevState.map((data) => {
        if (data.id === id) {
          data.isCompleted = true;
        }
        return data;
      });
    });
  };


  const onDeleteHandler = (id) => {
    if (activeState == "active" || activeState == "completed") {
      pickedFunc((prevState) => {
        return prevState.filter((data) => data.id !== id);
      });
      setTodos((prevState) => {
        return prevState.filter((data) => data.id !== id);
      });
    } else {
      setTodos((prevState) => {
        return prevState.filter((data) => data.id !== id);
      });
    }
  };

  console.log("Checked: ", isChecked)

  return (
    <div className="flex items-center py-4 px-4 justify-between gap-x-3 border-b-2 border-opacity-20 border-neutral-light-dark-grayish-blue">
      <button
        onClick={() => onClickHandler(todo.id)}
        className={twMerge("flex justify-center items-center h-7 w-7 rounded-full border ", isChecked || todo.isCompleted ? "bg-check-bg" : "")}
      >
        {(isChecked || todo.isCompleted) && <img src={checkIcon} alt="" />}
      </button>
      <p className="flex-grow text-neutral-light-very-dark-grayish-blue">{todo.todo}</p>
      <button onClick={() => onDeleteHandler(todo.id)} className="inline-block">
        <img src={crossLogo} alt="" />
      </button>
    </div>
  );
}
