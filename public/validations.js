window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#registerForm");

  const fields = {
    name: {
      input: document.querySelector("#name"),
      error: document.querySelector("#error-name"),
      validate: (value) =>
        value.trim().length >= 2 && value.trim().length <= 10,
      message: "El nombre debe tener entre 2 y 10 caracteres.",
    },
    surname: {
      input: document.querySelector("#surname"),
      error: document.querySelector("#error-surname"),
      validate: (value) =>
        value.trim().length >= 2 && value.trim().length <= 10,
      message: "El apellido debe tener entre 2 y 10 caracteres.",
    },
    email: {
      input: document.querySelector("#email"),
      error: document.querySelector("#error-email"),
      validate: (value) =>
        /\S+@\S+\.\S+/.test(value) &&
        value.trim().length >= 5 &&
        value.trim().length <= 150,
      message: "Debe ingresar un email válido entre 5 y 150 caracteres.",
    },
    password: {
      input: document.querySelector("#password"),
      error: document.querySelector("#error-password"),
      validate: (value) =>
        value.length >= 8 &&
        value.length <= 32 &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value),
      message:
        "Debe tener entre 8 y 32 caracteres, incluir mayúscula, minúscula y un número.",
    },
  };

  form.addEventListener("submit", (e) => {
    let errors = false;

    Object.values(fields).forEach((field) => {
      if (!field.validate(field.input.value)) {
        field.error.textContent = field.message;
        errors = true;
      } else {
        field.error.textContent = "";
      }
    });

    if (errors) e.preventDefault();
  });

  Object.values(fields).forEach((field) => {
    field.input.addEventListener("input", () => {
      if (field.validate(field.input.value)) {
        field.error.textContent = "";
      }
    });
  });
});
