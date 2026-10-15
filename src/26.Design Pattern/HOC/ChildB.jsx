import React, { useState } from 'react'
import WithCounter from './WithCounter'

const ChildB = ({count,handleIncrement}) => {
  
  return (
    <div>
        <h1>Child B</h1>
        <h1> count:{count}</h1>
        <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default WithCounter(ChildB)