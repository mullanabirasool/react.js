import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'


const Infinitescroll = () => {
	const[item,setItems] = useState([])
	const[hasMore,setHasMore] = useState(true)
	const page = useRef(1)

	const fetchData = async()=>{
		const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page.current}`)
		const data = res.data
		if(data.length === 0){
			setHasMore(false)
			return
		}
		setItems(prev => [...prev, ...data])
		page.current += 1
	}	

	useEffect(()=>{
		fetchData()
	},[])

  return (
	<div>
	  {
		<InfiniteScroll
			dataLength={item.length}
			next={fetchData}
			hasMore={hasMore}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
				  <b>No! more users</b>
				</p>
			  }
		>
			{item.map((data,index)=>(
				<div key={index} style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
					<h3>{data.title}</h3>
					<p>{data.body}</p>
				</div>
			))}
		</InfiniteScroll>
	  }
	</div>
  )
}

export default Infinitescroll