import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, activeTodos, completedTodos, activeState, setTodos, setActiveTodos, setCompletedTodos }) {
  let pickedState;
  let pickedFunc;

  if (activeState == "all" || null) {
    pickedState = todos;
    pickedFunc = setTodos;
  } else if (activeState == "active") {
    pickedState = activeTodos;
    pickedFunc = setActiveTodos;
  } else if (activeState == "completed") {
    pickedState = completedTodos;
    pickedFunc = setCompletedTodos;
  }

  const onClearComplete = () => {
    setCompletedTodos([]);
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
    pickedFunc(items);
  };

  return (
    <div className="w-full mt-6 rounded bg-white">
      <div className="flex flex-col gap-y-2 rounded-[inherit]">
        {pickedState.map((todo, index) => {
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
              pickedFunc={pickedFunc}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-sm text-neutral-light-dark-grayish-blue px-3 py-3">
        <p>{pickedState.length} items left</p>
        <button onClick={onClearComplete} className="inline-block">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
