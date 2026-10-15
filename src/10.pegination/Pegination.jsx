import React, { useState } from 'react';
import Data from './Data.jsx';

const Pegination = () => {
  const recordsPerPage = 10;
  const totalPages = Math.ceil(Data.length / recordsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  function getData() {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return Data.slice(startIndex, endIndex);
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <h2>Pagination Example</h2>
      <table border={'px'} cellSpacing={'10px'}>
      <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {getData().map((item, index) => (
        <tr key={index}>
          <td>{item.id} </td>
          <td>{item.name}</td>
          <td>{item.email}</td>
         </tr>
        ))}
        </tbody>
        <tbody>
  {/* {getData().map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
  ))} */}
</tbody>
      </table>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pegination;