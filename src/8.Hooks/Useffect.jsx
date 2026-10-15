import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  function handleIncrement() {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    document.title = `${count}`
    console.log('useEffect called')
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>My name is {input}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default App
