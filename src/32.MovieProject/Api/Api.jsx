import axios from "axios";

const baseURL=import.meta.env.VITE_BASE_URL;
const api_key =import.meta.env.VITE_API_KEY;


 export  async function fetchPopularMovies(page) {
                const response = await axios.get(`${baseURL}movie/popular?language=en-US`,{
                    params:{
                        api_key:api_key,
                        page:page
                    }  
                } )
                return response.data.results
             }
 export async function fetchTrendingMovies(page) {
      const response = await axios.get(`${baseURL}trending/all/day?language=en-US`,{
            params:{
                api_key:api_key,
                page:page
            }
      })
    return response.data.results
 }           
 export async function fetchMovieSearch(query) {
      const response = await axios.get(`${baseURL}search/movie`,{
            params:{
                api_key:api_key,
                page:1,
                query: query
            }
      })
    return response.data.results
 }  


export async function fetchMovieDetails(id) {
  const response = await axios.get( `${baseURL}movie/${id}`,
{
      params: {
        api_key: api_key
      }
    }
  )

  return response.data
}

export async function fetchMovieVideos(id) {
  const response = await axios.get( `${baseURL}movie/${id}/videos`,
{
      params: {
        api_key: api_key
      }
    }
  )

  return response.data
}

export async function fetchMovieCast(id) {
  const response = await axios.get( `${baseURL}movie/${id}/credits`,
{
      params: {
        api_key: api_key
      }
    }
  )

  return response.data
}