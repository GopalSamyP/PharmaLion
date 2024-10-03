import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { FaFolderMinus } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`sidemenu ${collapsed ? "collapsed" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        {!collapsed && <span className="brand-name">Pharma Lion</span>}
      </div>
      <button className="collapse-button" onClick={toggleCollapse}>
        {collapsed ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
      </button>

      <ul>
        <li>
          <Link to="/">
            <span className="menu-icon">
              <IoHome />
            </span>{" "}
            {!collapsed && "Dashboard"}
            {collapsed && <span className="tooltip">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon">
              <FaFolderMinus />
            </span>{" "}
            {!collapsed && "Products"}
            {collapsed && <span className="tooltip">Products</span>}
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon">
              <RiGroupFill />
            </span>{" "}
            {!collapsed && "Suppliers"}
            {collapsed && <span className="tooltip">Suppliers</span>}
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon">
              <HiAdjustmentsHorizontal />
            </span>{" "}
            {!collapsed && "Manufacturers"}
            {collapsed && <span className="tooltip">Manufacturers</span>}
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon">
              <HiMiniArrowsUpDown />
            </span>{" "}
            {!collapsed && "Users"}
            {collapsed && <span className="tooltip">Users</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Sidebar;
