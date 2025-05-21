import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import selectedCategory from "../store/SelectedCategory";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3333/categories/all");
        console.log("response.data", response.data);
        setCategories(response.data);
      } catch (err) {
        setError("Ошибка при загрузке категорий");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Определяем, какие категории показывать (4 или все)
  const visibleCategories = categories.slice(0, 4);

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__header">
          <h1 className="title-2">Categories</h1>
          <div className="line"></div>
          <Link to="/categories">
            <button className="all_categories_btn">All categories</button>
          </Link>
        </div>
        <div className="categories_cards">
          {visibleCategories.map((category) => (
            <div key={category.id} className="categories_item">
              <Link to="/categoryproducts" className="category-link">
                <img
                  className="img_category"
                  src={`http://localhost:3333/${category.image}`}
                  alt={category.title}
                  onClick={() => selectedCategory.addItem(category)}
                />
              </Link>
              <h3 className="categories_txt">{category.title}</h3>
              <Link to="/categoryproducts">
                <button
                  className="btn__showMore"
                  onClick={() => selectedCategory.addItem(category)}
                >
                  Show more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;