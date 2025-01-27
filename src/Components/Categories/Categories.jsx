import React, { useState } from "react";
import "./Categories.css";
import category1 from "./category.png";
import category2 from "./category_2.png";
import category3 from "./category_3.png";
import category4 from "./category_4.png";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const categories = [
    "All categories",
    "Fertilizer",
    "Protective products and septic tanks",
    "Planting material",
    "Tools and equipment",
  ];

  const images = [
    { src: category1, alt: "Fertilizer", title: "Fertilizer" },
    { src: category2, alt: "Protective products", title: "Protective products and septic tanks" },
    { src: category3, alt: "Planting material", title: "Planting material" },
    { src: category4, alt: "Tools and equipment", title: "Tools and equipment" },
  ];

  return (
    <div className="categories-container">
  <div className="categories-content">
    <div className="categories-header">
      <h1 className="categories-title">Categories</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="categories-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className="categories-images">
      {images.map((image, index) => (
        <div key={index} className="categories-item">
          <img src={image.src} alt={image.alt} className="categories-image" />
          <h3 className="categories-text">{image.title}</h3>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Categories;