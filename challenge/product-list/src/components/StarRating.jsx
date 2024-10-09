import React from "react";

const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
          onClick={() => onChange && onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
