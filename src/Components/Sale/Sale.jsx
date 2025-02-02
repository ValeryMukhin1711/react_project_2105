import React, { useState, useEffect } from "react";
import axios from "axios";
import {shuffle} from './utils'
import "./Sale.css";

// import bridge from "./bridge.png";
// import flowers from "./flowers.png";
// import aquarium from "./aquarium.png";
// import secateurs from "./secateurs.png";

const Sale = () => {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        console.log('response.data',response.data)
        console.log('run setSale')
        console.log('shuffle(response.data',shuffle(response.data))
        setSale(response.data.slice(0,4));
        console.log('sale',sale)
      } catch (err) {
        setError("Ошибка при загрузке sale");
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  },[]);

  // const items_1 = [ 
  //   {
  //     img: bridge,
  //     title: "Decorative forged bridge",
  //     price: "$500   ̶$̶1̶0̶0̶0̶",
  //     discount: "-50%",
  //   },
  //   {
  //     img: flowers,
  //     title: "Flower basket",
  //     price: "$100   ̶$̶1̶5̶0̶",
  //     discount: "-34%",
  //   },
  //   {
  //     img: aquarium,
  //     title: "Aquarium lock",
  //     price: "$150   ̶$̶2̶0̶0̶",
  //     discount: "-25%",
  //   },
  //   {
  //     img: secateurs,
  //     title: "Secateurs",
  //     price: "$199   ̶$̶2̶4̶0̶",
  //     discount: "-17%",
  //   },
  // ];
console.log('sale-out',sale)
const items = sale
  return (
    <div className="sale-container">
  <div className="sale-content">
    <div className="sale-header">
      <h1 className="sale-title">Sale</h1>
      <button className="sale-button">All sales</button>
    </div>
    <div className="sale-items">



    {[...items
  .filter(item => item.discont_price !== undefined && item.discont_price !== null) 
  .slice(0, 4), 
  ...Array(4).fill(null) 
]
  .slice(0, 4) 
  .map((item, index) => (
    <div key={index} className="sale-item">
      {item ? ( 
        <>
          <div className="image-container">
            <img src={`http://localhost:3333/${item.image}`} alt={item.title} className="sale-image" />
            <div className="discount-badge">
              {Math.round(100 - (item.discont_price / item.price) * 100)}%
            </div> 
          </div>
          <h3 className="sale-item-title">{item.title}</h3>
          <p className="sale-price">
            <span className="old-price">${item.price.toFixed(2)}</span>  
            <span className="new-price">${item.discont_price.toFixed(2)}</span>
          </p>
        </>
      ) : (
        <div className="empty-sale-item"></div>
      )}
    </div>
))}




    </div>
  </div>
</div>
  );
};

export default Sale;