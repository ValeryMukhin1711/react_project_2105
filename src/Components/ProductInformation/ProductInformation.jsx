import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./ProductDetail.css"; // Отдельный CSS-файл

const ProductInformation = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка загрузки продукта");
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Продукт не найден</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductInformation;