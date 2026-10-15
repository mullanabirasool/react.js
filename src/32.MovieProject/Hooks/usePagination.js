import React, { useState } from 'react'

const usePagination = () => {
    const[currentPage,setCurrentPage]=useState(1)
    function handlePrevPage(){
        setCurrentPage((prev)=> Math.max(prev-1 ,1))
    }
    function handleNextPage(){
        setCurrentPage((prev)=>prev+1)
    }
  return {currentPage,handleNextPage,handlePrevPage}
}

export default usePagination