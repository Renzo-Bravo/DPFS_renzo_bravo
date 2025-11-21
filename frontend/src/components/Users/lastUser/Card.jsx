import React from "react";
const URL_API = "http://localhost:3000";

export default function Card({ user }) {
  return (
    <div className="product-card">
      <img 
        src={`${URL_API}/images/profile/${user.image}`} 
        alt={user.name}
      />
      <h3>{user.name} {user.surname}</h3>
    </div>
  );
}
