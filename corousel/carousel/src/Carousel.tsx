import React, { useState, useEffect } from "react";
import "./styles.css";

const imagesData = [
  "https://images.pexels.com/photos/28588344/pexels-photo-28588344/free-photo-of-stunning-el-golfo-crater-and-green-lagoon-in-lanzarote.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17514561/pexels-photo-17514561/free-photo-of-wooden-shed-near-water-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/28403274/pexels-photo-28403274/free-photo-of-strawberries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const Carousel: React.FC<{ images?: string[] }> = ({ images = imagesData }) => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImg();
    }, 2000);

    return () => clearInterval(timer);
  }, [currImg]);

  const prevImg = () => {
    setCurrImg((currImg - 1 + images.length) % images.length);
  };

  const nextImg = () => {
    setCurrImg((currImg + 1) % images.length);
  };

  return (
    <div className="container">
      <img className="image" src={images[currImg]} alt="image" />
      <div className="buttons-container">
        <button className="btn" onClick={prevImg}>
          prev
        </button>
        <button className="btn" onClick={nextImg}>
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
