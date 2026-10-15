import React, { useMemo } from 'react'

const App = () => {
  const[count,setCount]=React.useState(0)
  const[sub,setSub]=React.useState(0)

  function handleIncrement(){
    setCount(prev=>prev+1)
  }
   
  function handleDecrement(){
    setSub(prev=>prev-1) 
  }

  const multiply =useMemo(()=>{
    console.log("I am Multiply")
    return count*2
  },[count])

  return (
    <div>
      <p>Add:{count}</p>
      <p>Sub:{sub}</p>
      <p>Mul:{multiply}</p>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Sub</button>
    </div>
  )
}

export default App