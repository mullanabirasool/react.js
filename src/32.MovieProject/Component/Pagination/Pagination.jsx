import React from 'react'
import Button from '../Button/Button'
import './Pagination.scss'

const Pagination = ({currentPage,handlePrevPage,handleNextPage}) => {
  return (
    <div className='Pagination'>
       <Button onClick={handlePrevPage} title={"Prev"}>Prev</Button>
       <span>{currentPage}</span>
       <Button onClick={handleNextPage} title={"Next"}>Next</Button>
    </div>
  )
}

export default Pagination