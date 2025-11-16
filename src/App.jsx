import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState('')

  const charactorCount = count.length

  return (
    <div>
      <textarea onChange={(e)=>{
        setCount(e.target.value)
      }} value={count} placeholder='Enter text'></textarea>
      <h1>Value: {charactorCount}</h1>
    </div>
  )
}

export default App
