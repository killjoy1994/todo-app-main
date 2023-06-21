import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, activeTodos, completedTodos, activeState, setTodos, setActiveTodos, setCompetedTodos}) {
  let pickedState;
  let pickedFunc;

  if(activeState == "all" || null) {
    pickedState = todos
    pickedFunc = setTodos
  } else if(activeState == "active") {
    pickedState = activeTodos
    pickedFunc = setActiveTodos
  } else if (activeState == "completed") {
    pickedState = completedTodos
    pickedFunc = setCompetedTodos
  }

  return (
    <div className='w-full mt-6 rounded bg-white'>
        <div className='flex flex-col gap-y-2 rounded-[inherit]'>
          {pickedState.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} setTodos={pickedFunc} />
          })}
        </div>
        <div className='flex justify-between text-sm text-neutral-light-dark-grayish-blue px-3 py-3'>
            <p>{pickedState.length} items left</p>
            <button className='inline-block'>Clear Completed</button>
        </div>
    </div>
  )
}
