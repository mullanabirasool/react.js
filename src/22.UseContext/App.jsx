import React,{createContext} from 'react'
import Child from './Child'

const Data1 = createContext()
const App = ()=> {
   const name="Nabirasool"
   const place="Bengaluru"


  return (
    <div>
      <Data1.Provider value={{name,place}}>
        <Child />
      </Data1.Provider> 
    </div>
  )
}

export default App
export {Data1}