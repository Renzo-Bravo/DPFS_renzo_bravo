import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${URL_API}/api/users`)
      .then((res) => res.json())
      .then((response) => {
        setUsers(response); 
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Listado de Usuarios</h2>

      <div className="products-list">
        {!loading ? (
          users.map((response) => <Card key={response.id} user={response} />)
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
