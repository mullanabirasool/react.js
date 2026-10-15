import React, {useState, useEffect } from 'react'
import './Pixabey.css'
const App = () => {
   const[data, setData] = useState([])
   const[input,setInput] = useState('car')
   const[currentPage,setCurrentPage] = useState(1)

  function handlePrev() {
  setCurrentPage(prev => Math.max(prev - 1, 1));
}

function handleNext() {
  setCurrentPage(prev => prev + 1);
}
   const api_key="56957368-13488dd2c003574fc20d31715"

   useEffect(() => {
  fetch(`https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&pretty=true&page=${currentPage}&per_page=10`)
    .then((res) => res.json())
    .then((d) => {
  console.log(d);      
  console.log(d.hits); 
  setData(d.hits);
});
    }, [input, currentPage]);
  return (
    <div>
      <div className='h1'><h1>PIXABAY IMAGES</h1></div>
      <br />
      <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search Image' />
      <div className='App-sub'>
        {
          data.map((item,index)=>{
            return(
             <div key={item.id} className='image-grid'>
              <img height={'300px'} width={'300px'} src={item.webformatURL} alt="" />
             </div>
            )
          })
        }

      </div>
      <button onClick={handlePrev}>Prev</button>
      <span>{currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App