import React from "react";
import cart from "../store/Cart";
import "./AddToCart.css"

function AddToCart({ value }) {
  console.log("AddToBasket item", value);
  return (
    <div>
      <button
        className="add-to-cart"
        id="add-button"
        onClick={() => cart.addItem(value)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
