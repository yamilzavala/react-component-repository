import React, { useState } from "react";
//★
const Rating: React.FC<{ stars?: number }> = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <>
      {[...Array(stars)].map((_, index) => {
        return (
          <span
            style={{
              color: rating > index ? "gold" : "gray",
              cursor: "pointer",
            }}
            onClick={() => setRating(index + 1)}
          >
            ★
          </span>
        );
      })}
      <p>
        Rating: {rating}/{stars}
      </p>
    </>
  );
};

export default Rating;
