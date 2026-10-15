import React,{useReducer} from 'react'

const App = () => {
   const initialState = 0
     function reducer(state,action){
      switch (action){
          case "Add":
              return state + 1;
          case "Sub":
              return state - 1;    
  
          default:
              return state;    
  
      }
     }
      const[state,dispatch]=useReducer(reducer,initialState)
    return (
      <div>
          <h1>{state}</h1>
          <button onClick={()=>dispatch('Add')}>Add</button>
          <button onClick={()=>dispatch('Sub')}>Sub</button>
      </div>
    )
  }

export default App