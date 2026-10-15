import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './28.Suspense/Navbar'
import Home from './28.Suspense/Home'
import About from './28.Suspense/About'
const App = () => {
 const Home = lazy(()=>import ('./28.Suspense/Home'))
 const About = lazy(()=> import ('./28.Suspense/About'))
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={ <About/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App