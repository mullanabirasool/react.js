import React,{useState} from 'react'

const counter = () => {
    const[count,setcount] = useState(0)
    function handleIncrement(){
        setcount(count + 1)
    }
    function handleDecrement(){
        setcount(count - 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
    </div>
  )
}

export default counter