import React from 'react'
import crossLogo from "../assets/images/icon-cross.svg"
import Circle from './elements/Circle'

export default function TodoItem() {
  return (
    <div className='flex items-center py-3 px-4 justify-between gap-x-3 border-b-2 border-red-600'>
        <Circle />
        <p className='flex-grow'>Eat....</p>
        <button className='inline-block'>
            <img src={crossLogo} alt="" />
        </button>
    </div>
  )
}
