import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { ThemeContext } from "../App";
import { twMerge } from "tailwind-merge";

export default function TodoList({ todos, activeState, setTodos}) {

  let state;
  const {theme} = useContext(ThemeContext)

  if (activeState == "all" || null) {
    state = todos;
   
  } else if (activeState == "active") {
    state = todos.filter(todo => !todo.isCompleted);

  } else if (activeState == "completed") {
    state = todos.filter(todo => todo.isCompleted);
  
  }

  const onClearComplete = () => {
    setTodos((prevState) => {
      return prevState.filter((data) => {
        return !data.isCompleted;
      });
    });
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const items = Array.from(todos);
    const [draggedItem] = items.splice(draggedIndex, 1);
    items.splice(index, 0, draggedItem);

    if(activeState == "active" || activeState == "completed") {
      setTodos(items);
    }
    setTodos(items);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <div className={twMerge("w-full mt-6 rounded", theme === "light" ? "bg-neutral-light-very-light-gray" : "bg-neutral-dark-very-dark-grayish-blue" )}>
      <div className="flex flex-col gap-y-2 rounded-[inherit]">
        {state.map((todo, index) => {
          return (
            <TodoItem
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              key={todo.id}
              todo={todo}
              activeState={activeState}
              setTodos={setTodos}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-sm text-neutral-light-dark-grayish-blue px-3 py-3">
        <p>{state.length} items left</p>
        <button onClick={onClearComplete} className="inline-block">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
