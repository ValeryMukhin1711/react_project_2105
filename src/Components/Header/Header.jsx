import React from "react";
import "./Header.css";
import logo from "../../logo/logo.png";
import basketIcon from "../../icon/icons.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <ul className="navigation">
          <li className="logo">
            <img src={logo} alt="Logo" />
          </li>
          <li>Main Page</li>
          <li>Categories</li>
          <li>All products</li>
          <li>All sales</li>
          <li className="basket-icon">
            <img src={basketIcon} alt="Basket Icon" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;