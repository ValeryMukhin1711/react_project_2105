import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";
import AddToCart from "../../ImportantButtons/AddToCart";
import ShowDetails from "../../ImportantButtons/ShowDetails";
import selectedproduct from "../../store/SelectedProduct";
import "./AllProducts.css";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discounted, setDiscounted] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:3333/products/all");
        let filteredProducts = response.data;

        if (minPrice)
          filteredProducts = filteredProducts.filter(
            (p) => p.price >= Number(minPrice)
          );
        if (maxPrice)
          filteredProducts = filteredProducts.filter(
            (p) => p.price <= Number(maxPrice)
          );
        if (discounted)
          filteredProducts = filteredProducts.filter(
            (p) => p.discont_price > 0
          );

        if (sortField === "price_asc") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortField === "price_desc") {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortField === "discount_desc") {
          filteredProducts.sort(
            (a, b) => (b.discount || 0) - (a.discount || 0)
          );
        }

        setProducts(filteredProducts);
      } catch (err) {
        setError("Ошибка при загрузке товаров");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortField, minPrice, maxPrice, discounted]);

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
          <button className="current__page__btn">All products</button>
        </Link>
      </div>
      <div className="product-list">
        <div className="sale-content">
          <h1 className="title-2">All Products</h1>

          {/* Фильтры */}
          <div className="filters">
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                placeholder="from"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="to"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={discounted}
                onChange={(e) => setDiscounted(e.target.checked)}
              />
              Discounted items
            </label>
            <div className="sort-container">
              <label className="label_sorted" htmlFor="sort-select">
                Sorted
              </label>
              <select
                id="sort-select"
                className="sorted"
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
              >
                <option value="default">by default</option>
                <option value="price_asc">Price ascending</option>
                <option value="price_desc">Price descending</option>
                <option value="discount_desc">Biggest discount</option>
              </select>
            </div>
          </div>

          {error && <h2 className="error-message">{error}</h2>}
          {loading ? (
            <h2 className="loading-message">Loading...</h2>
          ) : (
            <div className="products-cards">
              {products.map((item) => (
                <div key={item.id} className="product-item">
                  <div className="image-container">
                    {item.discont_price && (
                      <div className="discount-label">SALE</div>
                    )}
                    <Link to="/productinfo">
                      <img
                        src={`http://localhost:3333/${item.image}`}
                        alt={item.title}
                        className="sale-image"
                        onClick={() => selectedproduct.addItem(item)}
                      />
                    </Link>
                  </div>
                  <h3 className="sale-item-title">{item.title}</h3>
                  <div className="product-price">
                    {item.discont_price ? (
                      <>
                        <span>${item.discont_price.toFixed(2)}</span>
                        <s>${item.price.toFixed(2)}</s>
                      </>
                    ) : (
                      <span>${item.price.toFixed(2)}</span>
                    )}
                  </div>
                  <AddToCart value={item} />
                  <ShowDetails value={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <GoogleMaps />
    </>
  );
};

export default AllProducts;
