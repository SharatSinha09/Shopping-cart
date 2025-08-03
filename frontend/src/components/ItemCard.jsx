import React from "react";

function ItemCard({ item, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "150px",
        cursor: "pointer",
        textAlign: "center",
      }}
      onClick={() => onAdd(item._id)}
    >
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
    </div>
  );
}

export default ItemCard;
