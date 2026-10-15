// import axios from 'axios'
// // import './Home.css'
// import { useEffect, useState } from 'react'
// // import { useNavigate,Link } from 'react-router-dom'

// const Home = () => {
//     const[data,setData]=useState([])
//     // const navigate = useNavigate()

//     useEffect(()=>{
//     axios.get('http://localhost:3000/users')
//        .then((response)=>setData(response.data)) 
       
//     },[])


//     function handleDelete(id){
//         axios.delete(`http://localhost:3000/users/${id}`)
//         .then(()=> setData(data.filter(users => user.id !== id )))
//         .catch(err => console.error("Error fetching users:",err))  
//     }

//   return (

//     <div className='home'>

//     <h1>AXIOS CRUD</h1>
 
//     <table border='1px' cellPadding='10px' cellSpacing='10px'>
//          <thead>
//             <tr>
//                 <th><b>Id</b></th>
//                 <th><b>Name</b></th>
//                 <th><b>Email</b></th>
//                 <th><b>Action</b></th>
//             </tr>
//         </thead> 
    
//        <tbody>
//   {
//     data.map((item, index) => {
//       return (
//         <tr key={item.id}>
//           <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>
//            <button>Add+</button>
//            <button>Update</button>
//            <button onClick={()=>handleDelete(user.id)}>Delete</button>
//           </td>
//         </tr>
//       )
//     })
//   }
// </tbody>
//         <tfoot>

//         </tfoot>
//     </table>
//     </div>
//   )
// }

// export default Home
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((response) => setData(response.data))
      .catch(err => console.error("Error fetching users:", err))
  }, [])

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setData(data.filter(item => item.id !== id)))
      .catch(err => console.error("Error deleting user:", err))
  }

  return (
    <div className='home'>
      <h1>AXIOS CRUD</h1>

      <table border='1px' cellPadding='10px' cellSpacing='10px'>
        <thead>
          <tr>
            <th><b>Id</b></th>
            <th><b>Name</b></th>
            <th><b>Email</b></th>
            <th><b>Action</b></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
               <Link to={`/read/${item.id}`}><button>Read</button></Link>
              <Link to={`/update/${item.id}`}><button>Update</button></Link>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <p>Hello world!</p>
        </tfoot>
      </table>
    </div>
  )
}

export default Home
