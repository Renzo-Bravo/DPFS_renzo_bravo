import React, { useEffect, useState } from "react";
import Card from './Card.jsx';

export default function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL_API}/api/products/list`)
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Listado de productos</h2>

      <div>
        {products.map((prod) => (
          <Card key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
