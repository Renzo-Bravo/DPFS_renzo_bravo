import React, { useEffect, useState } from "react";
import "./Detail.css";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL_API}/api/products/detail/2`)
      .then((res) => res.json())
      .then((response) => {
        //console.log(response);
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.model}</h2>

      <div className="products-list">
        {!loading ? (
          <div className="product-card">
            <img src={`${URL_API}/images/products/${product.image}`} alt="" />
            <h3>{product.model}</h3>
            <p>Precio: ${product.price}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
