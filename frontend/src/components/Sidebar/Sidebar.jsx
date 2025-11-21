import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div>
        <ul className='SideBar'>
            <li><a href="/">Categorias</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Productos</a></li>
            <li><a href="/">Usuarios</a></li>
        </ul>
    </div>
  )
}
