import React from "react";
import "./FirstOrder.css";
import firstOrder from './image.svg'

const FirstOrder = () => {
  return (
    <section className="first__order">
      <div className="container">
        <div className="firstOrder__content">
          <div className="firstOrder__text">5% off on the first order</div>
          <div className="input__section">
            <input type="text" className="name" placeholder="Name" />
            <input
              type="text"
              className="phone__number"
              placeholder="Phone number"
            />
            <input type="text" className="email" placeholder="Email" />
            <button className="getADiscount__btn">Get a discount</button>
          </div>
          <img
            src={firstOrder}
            alt="First Order Discount"
            className="firstOrder__image"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstOrder;