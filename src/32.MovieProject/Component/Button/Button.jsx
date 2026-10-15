
import React from 'react'

const Button = ({ onClick, title, children }) => {
  return (
    <button onClick={onClick} title={title}>
      {children}
    </button>
  )
}

export default Button
