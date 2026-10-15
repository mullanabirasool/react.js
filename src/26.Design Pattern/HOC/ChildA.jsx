import React, { useState } from 'react'
import WithCounter  from './WithCounter'

const ChildA = ({count,handleIncrement}) => {
   
  return (
    <div>
        <h1>Child A</h1>
        <h1> count: {count}</h1>
        <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default WithCounter(ChildA);