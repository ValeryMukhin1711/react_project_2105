import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";

// import store from "../../store";

// const imagesArr = Object.entries(images)

const Categories = () => {
  

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3333/categories/all");
        console.log('response.data',response.data)
        console.log('run setCategories')
        setCategories(response.data);
        console.log('categories',categories)
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
  console.log('categories before return',categories)
  return (
    <div className="categories-container">
      <div className="categories-content">
        <div className="categories-header">
          <h1 className="categories-title">Категории</h1>
        </div>
        <div className="categories-images">
          {categories.map((category) => (
            <div key={category.id} className="categories-item">
              <img className='img_category'
                // src={imagesArr[category.id][1]}
                src={`http://localhost:3333/${category.image}`}
                alt={category.title}
                className1="categories-image"
              />
              <h3 className="categories-text">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;