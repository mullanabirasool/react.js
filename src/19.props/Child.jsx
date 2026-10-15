import React from 'react'

const Child = ({Hesaru,Jagha,Darkandlight,theme}) => {
  return (
    <div>
        <h1>My name is {Hesaru} and i am from {Jagha}</h1>
       <button onClick={Darkandlight}>{theme}</button>
    </div>
  )
}

export default Child