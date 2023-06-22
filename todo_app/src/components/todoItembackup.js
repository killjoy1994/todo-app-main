import React, { useEffect, useState } from "react";
import crossLogo from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { twMerge } from "tailwind-merge";

export default function TodoItem({ todo, setTodos, activeState, pickedFunc, ...props }) {
  const [isChecked, setIsChecked] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const onClickHandler = (id) => {
    setIsChecked((prevState) => !prevState);
    setTodoId(id)
  };

  useEffect(() => {
    // if(activeState === "completed") {

    // }
    setTodos((prevState) => {
      return prevState.map((data) => {
        if (data.id === todoId) {
          // console.log("COMPLETED: ", data.isCompleted)
          // data.isCompleted = (data.isCompleted === false) ? true : false
          data.isCompleted = !data.isCompleted
        }
        return data;
      });
    });
  }, [todoId, isChecked, activeState])


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

  // console.log("Checked: ", isChecked)

  return (
    <div {...props} className="flex items-center py-4 px-4 justify-between gap-x-3 border-b-2 border-opacity-20 border-neutral-light-dark-grayish-blue">
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
