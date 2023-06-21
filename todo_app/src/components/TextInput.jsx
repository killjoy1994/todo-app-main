import React, { useState } from "react";
import Circle from "./elements/Circle";

export default function TextInput({ setTodos }) {
  const [todo, setTodo] = useState("");

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos((prevState) => {
        return [...prevState, todo];
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
