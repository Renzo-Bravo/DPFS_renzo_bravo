import React from "react";
import "./Register.css";

const RegisterForm = () => {
  console.log("Renderizando RegisterForm");

  return (
    <>
      <h2>Registrarse</h2>
      <section className="formulary">
        <form
          className="register-form"
          encType="multipart/form-data"
        >
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
          />
          <span className="error" id="error-name"></span>

          <label htmlFor="image">Foto de perfil:</label>
          <input
            type="file"
            className="image"
            id="image"
            name="profile"
            accept="image/*"
          />

          <label htmlFor="surname">Apellido:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Apellido"
            required
          />
          <span className="error" id="error-surname"></span>

          <label htmlFor="date">Fecha de nacimiento:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
          />
          <span className="error" id="error-date"></span>

          <label htmlFor="gender_id">Género</label>
          <select
            name="gender_id"
            id="gender_id"
            required
          >
            <option value="">Seleccionar</option>
            <option value="1">Femenino</option>
            <option value="2">Masculino</option>
          </select>

          <label htmlFor="rol_id">Rol</label>
          <select
            name="rol_id"
            id="rol_id"
            required
          >
            <option value="">Seleccionar</option>
            <option value="1">Usuario</option>
            <option value="2">Administrador</option>
          </select>

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <span className="error" id="error-email"></span>

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <span className="error" id="error-password"></span>

          <div className="check">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              required
            />
            <label htmlFor="checkbox" className="conditions">
              Aceptar términos y condiciones
            </label>
          </div>

          <div className="sub">
            <button type="submit" className="submit-button">
              Registrarse
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;