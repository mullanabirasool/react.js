import React from 'react'

const RenderProps = ({children}) => {
    const[count,setCount]=React.useState(0)
   function handleIncrement(){
   setCount((prev)=>prev+1)
   }  
  return  children({count,handleIncrement})
}
export default RenderProps