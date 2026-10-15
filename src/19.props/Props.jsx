import React, { useState } from 'react'
import Child from './Child'
import './App.css'
const App = () => {
  const name = "Nabirasool"
  const place = "Bengaluru"
  
  const [theme, setTheme] = useState('light')
  
  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light') // fixed typo
  }

  return (
    <div className={theme}>
      <Child 
        theme={theme}
        Darkandlight={handleTheme}
        Hesaru={name}
        Jagha={place}
      />
    </div>
  )
}

export default App
