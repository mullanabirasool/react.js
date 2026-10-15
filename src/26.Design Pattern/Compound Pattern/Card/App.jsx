import React, { useEffect, useState } from 'react'
import {Card,CardTitle,CardDescription,CardImage,CardPrice,CardRating} from './26.Design Pattern/Compound Pattern/Card/index'
import axios from 'axios'
import './App.css'
const App = () => {
    const[data,setData] = useState([])
    
    useEffect(()=>{
       axios.get("https://fakestoreapi.com/products")
       .then((res)=>setData(res.data))
    },[])
  return (
    <div className='App'>
      {data.map((item,index)=>{
             {
              return(
                <Card key={item.id}>
                  <CardImage image={item.image}/>
                  <CardTitle title={item.title}/>
                  <CardDescription description={item.description}/>
                  <CardPrice price ={item.price}/>
                  <CardRating rating={item.rating}/>
                </Card>
              )
             }
        })
      }
    </div>
  )
}

export default App