import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";
import { UserProfile } from "../../pages/UserProfile";
import RouteLayout from "../../shared/layouts/RouteLayout";
import AdminLayout from "../../shared/layouts/AdminLayout";
import Dashboard from "../../pages/admin/Dashboard";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
