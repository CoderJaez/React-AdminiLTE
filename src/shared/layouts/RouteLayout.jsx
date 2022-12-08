import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/routes/Navbar";
const RouteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RouteLayout;
