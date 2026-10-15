import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {fetchMovieSearch} from '../../Api/Api'
import { Card,CardTitle, CardPoster, CardReleaseDate, CardVoteAverage } from '../../Component/Card/Card'


const Search = ({search}) => {
    const[data,setData]=useState([])
     
    
 useEffect(()=>{
    if(search){
     fetchMovieSearch(search)
     .then((data)=>setData(data))  
     }
 },[search])
    
  return (
    <div className="popular-movies">

    <h1 className="popular-movies-title">Search Movies</h1>

  <div className="popular-movies-grid">
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

export default Search