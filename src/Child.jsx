import React, { useContext } from 'react'
import { Data1 } from './App'

const Child = () => {
  const {name,place} = useContext(Data1)
  console.log(name,Data1)
  return (
    <div>
        <h1>My name is {name} and from {place} </h1>
    </div>
  )
}

export default Child