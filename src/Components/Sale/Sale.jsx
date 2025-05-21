import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sale.css";
import { Link } from "react-router-dom";
import Items from "../Items/Items";

export const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Sale = () => {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        const filteredSales = shuffle(
          response.data.filter((el) => el.discont_price !== null)
        );
        setSale(filteredSales);
      } catch (err) {
        setError("Ошибка при загрузке sale");
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  return (
    <section className="sale">
      <div className="sale__container">
        <div className="sale__header">
          <h2 className="title-2">Sale</h2>
          <div className="line"></div>
          <Link to="/sale">
            <button className="all_sales_btn">All sales</button>
          </Link>
        </div>
        <div className="sale__items">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            sale.slice(0, 4).map((item) => (
              <Items
                key={item.id}
                title={item.title}
                img={`http://localhost:3333/${item.image}`}
                newPrice={item.discont_price}
                oldPrice={item.price}
              />
              
            ))
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Sale;
