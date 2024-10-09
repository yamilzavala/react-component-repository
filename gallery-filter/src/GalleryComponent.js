import React, { useState } from "react";

const images = [
  { url: "img1.jpg", category: "nature" },
  { url: "img2.jpg", category: "city" },
  { url: "img4.jpg", category: "nature" },
];

function GalleryComponent() {
  const [filter, setFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(images);

  const handleOnChange = (e) => {
    setFilter(e.target.value);
    const newFilter = e.target.value;
    console.log("newFilter", newFilter);
    const newFilteredData =
      newFilter === "all"
        ? images
        : images.filter((item) => item.category === newFilter);
    setFilteredImages(newFilteredData);
  };

  return (
    <div className="container">
      <div className="filter-container">
        <select onChange={(e) => handleOnChange(e)} value={filter}>
          <option value="all">all</option>
          <option value="nature">nature</option>
          <option value="city">city</option>
        </select>
      </div>

      <div className="images-container">
        {filteredImages.map((currImg, idx) => (
          <img key={idx} className="image" src={currImg.url} alt="image" />
        ))}
      </div>
    </div>
  );
}

export default GalleryComponent;
