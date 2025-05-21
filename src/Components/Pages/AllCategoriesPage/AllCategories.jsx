import React, { useState, useEffect } from "react";
import "./AllCategories.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";
import selectedсategory from "../../store/SelectedCategory";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
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
  return (
    <>
      <Header />
      <div className="buttons">
        <Link to="/">
          <button className="btn">Main page</button>
        </Link>
        <Link to="/categories">
          <button className="current__page__btn">Categories</button>
        </Link>
      </div>

      <h1 className="title-2">Categories</h1>

      <div className="categories_cards">
        {categories.map((category) => (
          <div key={category.id} className="categories_item">
            <Link to="/categoryproducts" className="category-link">
              <img
                className="img_category"
                src={`http://localhost:3333/${category.image}`}
                alt={category.title}
                onClick={() => selectedсategory.addItem(category)}
              />
            </Link>
            <h3 className="categories_txt">{category.title}</h3>
            {/* <Link to="/categoryproducts">
              <button
                className="btn__showMore"
                onClick={() => selectedсategory.addItem(category)}
              >
                Show more
              </button>
            </Link> */}
          </div>
        ))}
      </div>
      <Footer />
      <GoogleMaps />
    </>
  );
};

export default AllCategories;
