import React from 'react'

const WithCounter = (OriginalComponent) => {
    function NewComponent(props){
      
          const[count,setCount]=React.useState(0)

          const handleIncrement = () =>{
              setCount(prev=>prev+1)
          
    }
  return (
    <div>
     <OriginalComponent count={count} handleIncrement={handleIncrement} {...props} />
    </div>
  )
}
 return NewComponent
}
export default WithCounter
