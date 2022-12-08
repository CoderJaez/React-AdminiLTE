import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import "../../assets/admin_lte/css/adminlte.css";
const AdminLayout = () => {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
