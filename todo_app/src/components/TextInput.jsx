import React from 'react'
import Circle from './elements/Circle'

export default function TextInput() {
  return (
    <form action="">
        <div className='w-full h-[44px] flex gap-x-4 px-4 py-2 items-center rounded bg-white mt-6'>
            <Circle />
            <input type="text" className='h-full w-full outline-none' placeholder='Create a new todo...' />
        </div>
    </form>
  )
}
