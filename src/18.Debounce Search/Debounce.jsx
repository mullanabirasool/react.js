import React, { useEffect, useRef, useState } from 'react'
import './Index.css'
const Index = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState('')
  
  function handleSearch() {
    // setSearch()
  }
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((d)=>setData(d))
  },[])

  return (
    
    <div className='container'>
      <input placeholder='Search Bar' onChange={(e)=>setSearch(e.target.value)} />
      {data
      .filter(item =>item.title.toLowerCase().includes(search.toLowerCase()))
      .map((item,index)=>{
        return(
         <div key={item.id} className='card'>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} width="100px" height="100Px" />
          <p>{item.description.slice(0,30)}...</p>
          <p>${item.price}</p>
         </div>
        )
      })}
    </div>
  )
}

export default Index