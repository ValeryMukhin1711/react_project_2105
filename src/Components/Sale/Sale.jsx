import React from "react";
import "./Sale.css";

import bridge from "./bridge.png";
import flowers from "./flowers.png";
import aquarium from "./aquarium.png";
import secateurs from "./secateurs.png";

const Sale = () => {
  const items = [
    {
      img: bridge,
      title: "Decorative forged bridge",
      price: "$500   ̶$̶1̶0̶0̶0̶",
      discount: "-50%",
    },
    {
      img: flowers,
      title: "Flower basket",
      price: "$100   ̶$̶1̶5̶0̶",
      discount: "-34%",
    },
    {
      img: aquarium,
      title: "Aquarium lock",
      price: "$150   ̶$̶2̶0̶0̶",
      discount: "-25%",
    },
    {
      img: secateurs,
      title: "Secateurs",
      price: "$199   ̶$̶2̶4̶0̶",
      discount: "-17%",
    },
  ];

  return (
    <div className="sale-container">
  <div className="sale-content">
    <div className="sale-header">
      <h1 className="sale-title">Sale</h1>
      <button className="sale-button">All sales</button>
    </div>
    <div className="sale-items">
      {items.map((item, index) => (
        <div key={index} className="sale-item">
          <div className="image-container">
            <img src={item.img} alt={item.title} className="sale-image" />
            <div className="discount-badge">{item.discount}</div>
          </div>
          <h3 className="sale-item-title">{item.title}</h3>
          <p className="sale-price">{item.price}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Sale;