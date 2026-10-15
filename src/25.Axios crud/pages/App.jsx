import React from 'react'
import Home from './25.Axios crud/pages/Home'
import Read from './25.Axios crud/pages/Read'
import Create from './25.Axios crud/pages/Create'
import Update from './25.Axios crud/pages/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
       
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App