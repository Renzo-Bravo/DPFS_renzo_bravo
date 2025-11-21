import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="menuToggle">
      <ul className="SideBar">
        <li>
          <a href="/">Categorias</a>
        </li>
        <li>
          <a href="/">Productos</a>
        </li>
        <li>
          <a href="/">Usuarios</a>
        </li>
        <li>
          <a href="/">Ultimo Usuario</a>
        </li>
      </ul>
    </div>
  );
}
