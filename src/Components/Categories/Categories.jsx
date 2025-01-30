import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3333/categories/all");
        setCategories(response.data);
      } catch (err) {
        setError("Ошибка при загрузке категорий");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p> Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="categories-container">
      <div className="categories-content">
        <div className="categories-header">
          <h1 className="categories-title">Категории</h1>
        </div>
        <div className="categories-images">
          {categories.map((category) => (
            <div key={category.id} className="categories-item">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="categories-image"
              />
              <h3 className="categories-text">{category.title}</h3>
              <h3 className="categories-text">
                <img src={category.image}></img>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;