import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ minHeight: "100vh" }}
    >
      {/* Brand Logo */}
      <a href="../../index3.html" className="brand-link">
        <img
          src="../../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="" className="img-circle elevation-2" />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="" className="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Nav link</p>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/" className="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
