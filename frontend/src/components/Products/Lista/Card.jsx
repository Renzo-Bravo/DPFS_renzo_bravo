import React from "react";
const URL_API = "http://localhost:3000";

export default function Card({ product }) {
  return (
    <div className="product-card">
      <img src={`${URL_API}/images/products/${product.image}`} alt="" />
      <h3>{product.model}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}
