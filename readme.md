# MoviGo 🚲

MoviGo es una página web dedicada a la venta y promoción de bicicletas. Su objetivo es ofrecer una experiencia clara, rápida y funcional para los usuarios que buscan conocer o comprar bicicletas de distintos tipos.

---

## Descripción 📒

El sitio permite explorar un catálogo de bicicletas, ver detalles de cada modelo, y contactar con la tienda.  
El diseño busca ser sencillo y adaptable, priorizando la velocidad de carga y la facilidad de navegación.

---

## Colores 🔴🟢🔵

- Gris 🩶
- Amarillo 💛

---

## Tecnologías utilizadas 💻

- HTML5  
- CSS3  
- JavaScript  
- Node.js  
- Express  
- MySQL  

---

## Anotaciones

(Sprint 6)

 - El promblema que tengo al ejecutar el comando "seed:all" y tener la tabla "products" en la base me corta la migración de las semillas por un conflicto al no poder encontrar "size_id". Eso pasa porque la tabla "sizes" no migró los datos antes que la tabla "products", reflexionando sobre eso podría haber cambiado el nombre temporalmente de la tabla "size" para que se ejecute antes, pero por ahora prefiero no tocar nada y llenar la tabla "products" manualmente para que tenga un producto.

1. Sube las semilla a la base:
   ```bash 
   npx sequelize-cli db:seed:all

2. Elimina los datos de la semilla en la base:
   ```bash
   npx sequelize-cli db:seed:undo:all

---

## Trello 📋

1. Tablero:
   ```bash
   https://trello.com/b/h9aciVLY/proyecto

---

## Instalación ⬇️

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Renzo-Bravo/DPFS_Grupo4_Renzo_Bravo.git

