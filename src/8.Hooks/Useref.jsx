import React, { useRef } from 'react'
import './App.css'
const App = ()=> {
 const inputref=useRef(null)
 function handleSearch(){
  inputref.current.focus()
 }
  return (
    <div className='container'>
      <input ref={inputref}  />
      <button onClick={handleSearch} className='bt'>submit</button>
      </div>
  )
}

export default App