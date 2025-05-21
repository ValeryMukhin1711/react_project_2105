import React from "react";
import selectedproduct from "../store/SelectedProduct";
import { Link } from "react-router-dom";
import "./ShowDetails.css";

function ShowDetails({ value }) {
  return (
    <div>
      <Link to="/products">
        <button
          className="show-details"
          onClick={() => selectedproduct.addItem(value)}
        >
          Show details
        </button>
      </Link>
    </div>
  );
}

export default ShowDetails;
