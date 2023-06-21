import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div className='w-full mt-6 rounded bg-white'>
        <div className='flex flex-col gap-y-2 rounded-[inherit]'>
          {todos.map(todo => {
            return <TodoItem todo={todo} />
          })}
        </div>
        <div className='flex justify-between text-sm text-neutral-light-dark-grayish-blue px-3 py-3'>
            <p>5 items left</p>
            <button className='inline-block'>Clear Completed</button>
        </div>
    </div>
  )
}
