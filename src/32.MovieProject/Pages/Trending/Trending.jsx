import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {fetchTrendingMovies} from '../../Api/Api'
import { Card,CardTitle, CardPoster, CardReleaseDate, CardVoteAverage } from '../../Component/Card/Card'
import { ImGift } from 'react-icons/im'

const Trending = ({page}) => {
    const[data,setData]=useState([])
     
    
 useEffect(()=>{
     fetchTrendingMovies(page)
     .then((data)=>setData(data))  
 },[page])
 
  return (
    <div className="movies">
  <h1 className="Trending-movies-title">Trending Movies</h1>
  <div className="Trending-movies-grid">
    {data.map((item, index) => (
      <Card key={index}>
        <CardPoster poster_path={item.poster_path} original_title={item.original_title} />
        <CardTitle original_title={item.original_title} />
        <CardReleaseDate release_date={item.release_date} />
        <CardVoteAverage vote_average={item.vote_average} />
      </Card>
    ))}
  </div>
</div>
  )
}

export default Trending