import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Search from "../Pages/Search/Search";
import Pagination from "../Component/Pagination/Pagination";
import Notfound from "../Pages/Notfound/Notfound";
import Loader from "../Component/Loader/Loader";
import Modaldetails from "../Pages/Modaldetails/Modaldetails";


const Home = lazy(() =>
  import("../Pages/Home/Home")
);

const Trending = lazy(() =>
  import("../Pages/Trending/Trending")
);

const Contact = lazy(() =>
  import("../Pages/Contact/Contact")
);


const Router = ({
  search,
  debouncevalue,
  currentPage,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          search === "" ? (
            <Suspense fallback={<Loader />}>
              <Home page={currentPage} />

              <Pagination
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            </Suspense>
          ) : (
            <Search search={debouncevalue} />
          )
        }
      />


      <Route
        path="/trending"
        element={
          search === "" ? (
            <Suspense fallback={<Loader />}>
              <Trending page={currentPage} />

              <Pagination
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            </Suspense>
          ) : (
            <Search search={debouncevalue} />
          )
        }
      />


      <Route
        path="/movie/:id"
        element={
          <Suspense fallback={<Loader />}>
            <Modaldetails />
          </Suspense>
        }
      />

      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={<Notfound />}
      />

    </Routes>
  );
};

export default Router;