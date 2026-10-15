import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./32.MovieProject/Layout/Navbar/Navbar";
import Footer from "./32.MovieProject/Layout/Footer/Footer";

import Router from "./32.MovieProject/Router/Router";

import usePagination from "./32.MovieProject/Hooks/usePagination";
import useDebounce from "./32.MovieProject/Hooks/useDebounce";


const App = () => {

  const { 
    currentPage, 
    handlePrevPage, 
    handleNextPage 
  } = usePagination();

  const [search, setSearch] = useState("");

  const debouncevalue = useDebounce({ search });


  return (
    <div>

      <BrowserRouter>

        <Navbar
          setSearch={setSearch}
          search={search}
        />

        <Router
          search={search}
          debouncevalue={debouncevalue}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />

        <Footer />

      </BrowserRouter>

    </div>
  );
};


export default App