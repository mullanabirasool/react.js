import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";  // your Firebase config

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser; // Firebase gives the logged-in user

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
