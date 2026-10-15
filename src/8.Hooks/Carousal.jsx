import React, { useState } from 'react'

const App = () => {

  const Images = [
    "https://picsum.photos/id/1015/500/500",
  "https://picsum.photos/id/1016/500/500",
  "https://picsum.photos/id/1018/500/500",
  ]
  const[currentIndex,setCurrentIndex]=useState(0)

  function handleNext(){
    setCurrentIndex((currentIndex +1) % Images.length)
  }

  function handlePrevious(){
    setCurrentIndex((currentIndex -1 + Images.length) % Images.length)
  }
  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img src={Images[currentIndex]} height="500px" width="500px" />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App