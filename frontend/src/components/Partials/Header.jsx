import React from "react";
import './Header.css';
import MoviGoLogo from '../../assets/MoviGo.png';

export default function Header() {
  return (
    <div>
      <header>
        <div className="navbar">
          <i className="bi bi-list"></i>
        </div>

        <div className="logo">
          <img src={MoviGoLogo} alt="Logo MoviGo" />
        </div>

        <div className="test">
          <div className="search">
            <i className="bi bi-search"></i>
          </div>
          <div className="cart">
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
