import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { twMerge } from "tailwind-merge";

export default function TodosFilter({ todos, activeState, setActiveState }) {
  const {theme} = useContext(ThemeContext)

  const onAllHandler = () => {
    setActiveState("all")
  };

  const onActiveHandler = () => {
    setActiveState("active")
  };

  const onCompletedHandler = () => {
    setActiveState("completed")
  };

  return (
    <div className={twMerge("mt-6 flex justify-center gap-x-3 font-semibold w-full py-3 rounded text-neutral-light-dark-grayish-blue", theme === "light" ? "bg-neutral-light-very-light-gray" : "bg-neutral-dark-very-dark-grayish-blue")}>
      <button className={activeState === "all" ? "text-blue-700" : ""} onClick={onAllHandler}>All</button>
      <button className={activeState === "active" ? "text-blue-700" : ""} onClick={onActiveHandler}>Active</button>
      <button className={activeState === "completed" ? "text-blue-700" : ""} onClick={onCompletedHandler}>Completed</button>
    </div>
  );
}
