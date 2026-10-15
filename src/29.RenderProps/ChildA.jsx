import React from 'react'

const ChildA = ({count,handleIncrement}) => {
  return (
    <div>
     <h1>ChildA</h1>
     <h1>Count:{count}</h1>
     <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default ChildA