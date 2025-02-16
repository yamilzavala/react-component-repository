import React, { useState } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ images }) {
  const [currIdx, setCurrIdx] = useState(0);
  const currImage = images[currIdx];

  return (
    <div className="image-carousel">
      <img
        src={currImage?.src}
        alt={currImage?.alt}
        className="image-carousel__image"
        key={currImage?.src}
      />

      <button
        aria-label="Prev image"
        className="image-carousel__button image-carousel__button--prev"
        onClick={() => {
          const prevIdx = (currIdx - 1 + images.length) % images.length;
          setCurrIdx(prevIdx);
        }}
      >
        &#10094;
      </button>

      <div className="image-carousel__pages">
        {images.map(({ src, alt }, idx) => (
          <button
            key={src}
            className={`image-carousel__pages__button ${
              idx === currIdx ? "image-carousel__pages__button--active" : ""
            }`}
            onClick={() => setCurrIdx(idx)}
            aria-label={`Navigate to ${alt}`}
          />
        ))}
      </div>

      <button
        aria-label="Next image"
        className="image-carousel__button image-carousel__button--next"
        onClick={() => {
          const nextIdx = (currIdx + 1) % images.length;
          setCurrIdx(nextIdx);
        }}
      >
        &#10095;
      </button>
    </div>
  );
}
