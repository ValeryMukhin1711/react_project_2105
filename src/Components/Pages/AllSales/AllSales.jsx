import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllSales.css";

import selectedproduct from "../../store/SelectedProduct";
import { Link } from "react-router-dom";
import ShowDetails from "../../ImportantButtons/ShowDetails";
import AddToCart from "../../ImportantButtons/AddToCart";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";

export const AllSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        console.log("response", response);
        const tmpArr = response.data.filter((el) => el.discont_price !== null);
        setProducts(tmpArr);
      } catch (err) {
        setError("Ошибка при загрузке products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const items = products;
  return (
    <>
      <Header />
      <div className="buttons">
        <Link to="/">
          <button className="btn">Main page</button>
        </Link>
        <Link to="/categories">
          <button className="btn">Categories</button>
        </Link>
        <Link to="/products">
          <button className="btn">All products</button>
        </Link>
        <Link to="/sale">
        <button className="current__page__btn">All Sales</button>
        </Link>
      </div>
      <div className="sale-container">
        <div className="sale-content">
          <div className="sale-header">
            <h1 className="sale-title">All Sales</h1>
          </div>
          <div className="sale_items">
            {[...items].map((item, index) => (
              <div key={index} className="sale-item">
                {item ? (
                  <>
                    <div className="image-container">
                      <Link to="/productinfo">
                        <img
                          src={`http://localhost:3333/${item.image}`}
                          alt={item.title}
                          className="sale-image"
                          onClick={() => selectedproduct.addItem(item)}
                        />
                      </Link>
                      <div className="discount-badge">
                        -{" "}
                        {Math.round(
                          100 - (item.discont_price / item.price) * 100
                        )}
                        %
                      </div>
                    </div>
                    <AddToCart value={item} />
                    <h3 className="sale-item-title">{item.title}</h3>

                    <ShowDetails value={item} />
                  </>
                ) : (
                  <div className="empty-sale-item"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <GoogleMaps />
    </>
  );
};

export default AllSales;
