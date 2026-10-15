import React, { useLayoutEffect, useRef, useState } from 'react'

const Uselayouteffect = () => {
    const boxref =useRef(null)
    const[text,setText] = useState("InitialText")
    
    useLayoutEffect(()=>{
      if(boxref.current.offsetWidth > 250){
          setText("Width is greater than 250px")
      }
    },[])

  return (
    <div ref={boxref} style={{width:'300px' , border:'1px solid black'}}>
        <h1>{text}</h1>
        </div>
  )
}

export default Uselayouteffect