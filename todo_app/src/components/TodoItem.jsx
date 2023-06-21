import React, { useState } from 'react'
import crossLogo from "../assets/images/icon-cross.svg"
import checkIcon from "../assets/images/icon-check.svg"
import { twMerge } from 'tailwind-merge'

export default function TodoItem({todo}) {
  const [isChecked, setIsChecked] = useState(false)

  const onClickHandler = () => {
    setIsChecked(prevState => !prevState)
  }
  return (
    <div className='flex items-center py-4 px-4 justify-between gap-x-3 border-b-2 border-opacity-20 border-neutral-light-dark-grayish-blue'>
        <button onClick={onClickHandler} className={twMerge('flex justify-center items-center h-7 w-7 rounded-full border ', isChecked ? 'bg-check-bg' : "")}>
          {isChecked && <img src={checkIcon} alt="" />}
        </button>
        <p className='flex-grow text-neutral-light-very-dark-grayish-blue'>{todo}</p>
        <button className='inline-block'>
            <img src={crossLogo} alt="" />
        </button>
    </div>
  )
}
