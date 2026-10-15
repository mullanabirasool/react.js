import React, { useCallback } from 'react'
import Child from './Child'
const App = () => {
  const[add,setAdd]=React.useState(0)

  function handleAdd(){
    setAdd(prev=>prev+1)
  }
  const learning = useCallback(()=>{
  },[])

  return (
    <div>
      <h1>{add}</h1>
      <button onClick={handleAdd}>Add</button>
      <Child learning={learning} />
    </div>
  )
}

export default App

import React from 'react'

const Child = ({name}) => {
  console.log("Child component rendered")
  return (
    <div>
      <h1>Child component</h1>
    </div>
  )
}

export default React.memo(Child);