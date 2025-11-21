// src/components/Footer.jsx

import React from "react";
import "./Footer.css";
import MoviGoLogo from "../../assets/MoviGo.png";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={MoviGoLogo} alt="Logo MoviGo" />
          <p className="footer-tagline">
            Ingrese texto motivacional referenciando Bicicletas.
          </p>
        </div>

        <div className="footer-section footer-info">
          <h3>Información</h3>
          <p>Email: info@movigo.com</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Dirección: Calle Falsa 123, Ciudad.</p>
        </div>

        <div className="footer-section footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} MoviGo. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
