import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {fetchPopularMovies} from '../../Api/Api'
import { Card,CardTitle, CardPoster, CardReleaseDate, CardVoteAverage } from '../../Component/Card/Card'
import formatDate from '../../Utils/formatDate'
import Loader from '../../Component/Loader/Loader'
import { Link } from 'react-router-dom'

const Home = ({page}) => {
    const[data,setData]=useState([])
     
    useEffect(()=>{
     fetchPopularMovies(page)
     .then((data)=>setData(data)) 

 },[page])
    
  return (
    
    <div className="popular-movies">

    <h1 className="popular-movies-title">Popular Movies</h1>
  <div className="popular-movies-grid">
    {data.map((item, index) => (
      <Card key={index}>
       <Link to={`/movie/${item.id}`}> <CardPoster poster_path={item.poster_path} original_title={item.original_title} /></Link>
        <CardTitle original_title={item.original_title} />
        <CardReleaseDate release_date={formatDate(item.release_date)} />
        <CardVoteAverage vote_average={item.vote_average} />
      </Card>
    ))}
  </div>
</div>
  )
}
  

export default Home