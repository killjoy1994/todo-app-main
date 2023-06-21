import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  return (
    <div className='w-full mt-6 rounded bg-white'>
        <div className='bg-yellow-400 py-2 flex flex-col gap-y-2'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
        <div className='flex justify-between text-sm text-neutral-light-dark-grayish-blue px-3 py-2'>
            <p>5 items left</p>
            <button className='inline-block'>Clear Completed</button>
        </div>
    </div>
  )
}
