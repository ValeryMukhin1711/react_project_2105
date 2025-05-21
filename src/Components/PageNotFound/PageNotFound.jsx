import React from "react";
import pageNotFound from "../../img/mainPics/404.svg";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

function PageNotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <img
          className="img__notFound"
          src={pageNotFound}
          alt="Page not found"
        />
        <h2 className="pageNotFound">Page Not Found</h2>

        <p className="txt__notFound">
          We're sorry, the page you requested could not be found.
        </p>
        <p className="txt__notFound">Please go back to the homepage.</p>

        <Link to="/">
          <button className="btn__GoHome">Go Home</button>
        </Link>
      </div>
      <Footer />
      <GoogleMaps />
    </>
  );
}

export default PageNotFound;
