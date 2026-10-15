import React from 'react'

const Usemodal = () => {
    const[open,setOpen]=React.useState(false)
    function handleToggle(){
        setOpen((prev)=>!prev)
    }

  return{open,handleToggle}
}

export default Usemodal