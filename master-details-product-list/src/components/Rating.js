import React from "react";

export default function Rating({ rating, onClick = () => {} }) {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => i).map((start) => (
        <span
          onClick={() => onClick && onClick(start)}
          style={{ color: start <= rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
