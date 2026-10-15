import './Card.scss'

export function Card({children}){
    return (
        <div className="card">{children}</div>
    )
}

export function CardPoster({poster_path,original_title}){
  return (
    <div className="card-Poster_path"><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /></div>
  )
}
export function CardTitle({original_title}){
  return (
    <div className="card-Original_title">{original_title}</div>
  )
}

export function  CardReleaseDate({release_date}){
  return (
    <div className="card-Release_date">{release_date}</div>
  )
}

export function CardVoteAverage({vote_average}){
  return (
    <div className="card-Vote_average">{vote_average}</div>
  )
}


