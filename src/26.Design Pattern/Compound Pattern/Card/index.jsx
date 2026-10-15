import './index.scss'

export function Card({children}){
    return (
        <div className="card">{children}</div>
    )
}

export function CardTitle({title}){
    return(
        <div className="card-title">{title}</div>
    )
}

export function CardDescription({description}){
    return(
        <div className="card-description">{description.slice(0,30)}...</div>

    )
}
export function CardImage({image}){
    return(
        <div className="card-image">
            <img src={image} alt="card-image" />
        </div>
    )
}
export function CardPrice({price}){
     return(
        <div className="card-price">{price}</div>
     )
}
export function CardRating({ rating }) {
  return (
    <div className="card-rating">
      ⭐ {rating.rate} / 5 
    </div>
  );
}