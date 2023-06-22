import React from "react";

export default function TodosFilter({ todos, setActiveTodos, setCompletedTodos, activeState, setActiveState }) {
  const onAllHandler = () => {
    setActiveState("all")
  };

  const onActiveHandler = () => {
    const filtered = todos.filter((data) => {
      if (data.isCompleted === false) {
        return data;
      }
    });
    setActiveTodos(filtered);
    setActiveState("active")
  };

  const onCompletedHandler = () => {
    const filtered = todos.filter((data) => {
      if (data.isCompleted === true) {
        return data;
      }
    });
    setCompletedTodos(filtered);
    setActiveState("completed")
  };

  return (
    <div className="mt-6 flex justify-center gap-x-3 font-semibold bg-white w-full py-3 rounded text-neutral-light-dark-grayish-blue">
      <button className={activeState === "all" ? "text-blue-700" : ""} onClick={onAllHandler}>All</button>
      <button className={activeState === "active" ? "text-blue-700" : ""} onClick={onActiveHandler}>Active</button>
      <button className={activeState === "completed" ? "text-blue-700" : ""} onClick={onCompletedHandler}>Completed</button>
    </div>
  );
}
