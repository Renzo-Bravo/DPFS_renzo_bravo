import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function AllUsers() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL_API}/api/users/last-user`)
      .then((res) => res.json())
      .then((response) => {
        setUser(response);
        console.log("🚀 RESPUESTA API:", response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Ultimo usurio</h2>

      <div className="products-list">
        {!loading ? <Card key={user.id} user={user} /> : <p>Cargando...</p>}
      </div>
    </div>
  );
}
