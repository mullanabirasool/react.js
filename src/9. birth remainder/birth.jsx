import React, { useState } from 'react';

const App = () => {
  const Data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jemini", age: 40 }
  ];

  const [peopleData, setPeopleData] = useState(Data);

  function handleClear() {
    setPeopleData([]);
  }

  return (
    <div>
      <h1>Birthday Reminders {peopleData.length}</h1>
      {peopleData.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
          </div>
        );
      })}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default App;
