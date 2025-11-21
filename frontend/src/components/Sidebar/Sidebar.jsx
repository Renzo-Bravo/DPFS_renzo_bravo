import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="menuToggle">
      <ul className="SideBar">
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
        <li>
          <Link to="/last-user">Ultimo Usuario</Link>
        </li>
      </ul>
    </div>
  );
}