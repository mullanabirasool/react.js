import React ,{useId}from 'react'

function App() {
 
  const id = useId();

  return (
    <div id={id}>
      <h1>My Name is Nabirasool</h1>
      <input id={id} type="email" placeholder="example@mail.com" />
    </div>
  );
}

export default App;