import React, { useEffect, useState } from 'react'
import './WhetherMap.scss'
const App = () => {
	const[search,setSearch] = useState('Bengaluru')
	const[debounce,setDebounce] = useState("")
	const[data,setData] = useState({})

	useEffect(()=>{
		let timer = setTimeout(()=>{
			setDebounce(search)
		},2000)

		return ()=>clearInterval(timer)

	},[search])

	useEffect(()=>{
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2e80a3dca832eb36d5845f0dfda361f4&units=metric`)
		.then((res)=>res.json())
		.then(d=>setData(d))
	},[debounce])
  return (
	<div className='whethermap'>
	 <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search City...'/>
	 {
		(data.main !== undefined)?(
			<div className='card'>
			 <p>{data.name}</p>
			 <p>{data.main.temp}</p>
			 <p>{data.weather[0].main}</p>
			 <p>{data.weather[0].description}</p>
			</div>
		)
		:
		(
			<h1>NoT Found</h1>
		)
	 }

	</div>
  )
}

export default App