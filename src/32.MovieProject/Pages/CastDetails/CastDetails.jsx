// import React, { useEffect, useState } from 'react'
// import { fetchMovieCast } from '../../Api/Api'
// import './CastDetails'
// const CastDetails = ({id}) => {
//     const[data,setData]=useState([])
    
//     useEffect(()=>{
//         fetchMovieCast(id)
//         .then((response)=>{   
//             setData(response.cast)
//         })
//     },[id])

//   return (
       
//     <div className='movie-cast-container'>
//         {
//             data.map((item)=>{
//                 return (
//                 <div key={item.id}  className='cast-card'>
//                       <div>
                  
//                           <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
//                                alt={item.name}/> 
//                       </div>
//                       <p>{item.name}</p>
//                       <p>{item.character}</p>
//                 </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default CastDetails
import React, { useEffect, useState } from "react";
import { fetchMovieCast } from "../../Api/Api";
import "./CastDetails.scss";

const CastDetails = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieCast(id)
      .then((response) => {
        setData(response.cast || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <section className="cast-section">

      <h2 className="cast-title">Cast</h2>

      <div className="movie-cast-container">
        {data.map((item) => (
          <div className="cast-card" key={item.id}>

            <div className="cast-image">
                        <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                               alt={item.name}/> 
            </div>
              <h3>{item.name}</h3>
              <p>{item.character}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default CastDetails;