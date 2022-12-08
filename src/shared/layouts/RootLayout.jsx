import React from "react";
import { Outlet } from "react-router-dom";
const RootLayout = ({ children }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
