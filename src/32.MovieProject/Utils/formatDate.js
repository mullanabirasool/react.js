import React from 'react'

const formatDate = (date) => {
    if(!date) return 'Unknown date'
    const newDate = new Date(date)
  return newDate.toLocaleDateString('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric'
   
  } )
}

export default formatDate