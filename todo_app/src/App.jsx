import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='min-h-screen sm:mx-auto sm:max-w-[1440px] relative'>
      {/* Image Background */}
      <div className='absolute -z-50 left-0 top-0 w-full h-[200px] xl:h-[300px] bg-mobile-bg-light sm:bg-desktop-bg-light bg-no-repeat bg-cover bg-[position:center_top]'></div>
      <header className=''>
        <h1 className='text-4xl font-medium tracking-[5px] text-slate-50'>TODO</h1>
        <img src="" alt="" />
      </header>
    </div>
  )
}

export default App
