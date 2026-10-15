import React, { useEffect, useState } from 'react'

const useDebounce = ({search}) => {
  const[debouncevalue,setDebounceValue] =useState("")

    useEffect(()=>{
        const timer =setTimeout(()=>{
            setDebounceValue(search)
        },500)
        return () =>clearTimeout(timer)
    },[search])
  return debouncevalue
}

export default useDebounce