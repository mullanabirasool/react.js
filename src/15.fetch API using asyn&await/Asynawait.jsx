import React,{useState,useEffect} from 'react'


const App = () => {
  const[data,setData]=useState([])
  const[loading,setLoading] = useState(true)

  async function fetchData(){
    try{
      const data=await fetch('https://fakestoreapi.com/products')
      const finalData=await data.json()
      setData(finalData) 
       setLoading(false)
    }
    catch(error){
    console.log(error)
    }
  }
  useEffect(()=>{
   fetchData();
  },[])

  if (loading){
    return <div>Loading...</div>
  }
   return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} width="100" />
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App