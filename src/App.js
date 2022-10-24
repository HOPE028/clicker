import './App.css'
import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div className='text-container'>
        <div className='text-content'>
          <h1>{counter}</h1>
        </div>
      </div>

      <button
        onClick={() => setCounter((counter) => counter + 1)}
        className='special_button'
      ></button>
    </div>
  )
}

export default App
