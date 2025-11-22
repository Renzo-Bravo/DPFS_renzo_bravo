import React from "react";
import "./Login.css";

const LoginForm = () => {
  console.log("Renderizando LoginForm");

  return (
    <div className="bodyLoginForm">
      <div className="login-form-container">
        <form className="login-form">
          <h2 className="form-title">Iniciar Sesión</h2>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introduce tu correo electrónico"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduce tu contraseña"
              required
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe" className="checkbox-label">
              Guardar sesión
            </label>
          </div>

          <a href="#forgot-password" className="forgot-password-link">
            ¿Has olvidado la contraseña?
          </a>

          <button type="submit" className="submit-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
