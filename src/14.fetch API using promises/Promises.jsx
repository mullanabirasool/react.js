import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData]=useState([])
  const[loading,setLoading] = useState(true)
  
  useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((d) => {
      setData(d)
      setLoading(false)}); 
  },[])

  if (loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      {
        data.map((item,index)=>{
          return(
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.tite} width="100%" />
              <p>${item.price}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App