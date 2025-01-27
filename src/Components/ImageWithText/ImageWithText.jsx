import React from 'react';
import './ImageWithText.css';
import image_1 from './img.jpg';

const ImageWithText = () => {
  return (
    <div className='wrapper'>
    <div className="image-container">
      <img src={image_1} alt="Garden" className="background-image" />
      <div className="content-overlay">
        <h1 className="title">Amazing Discounts on Garden Products!</h1>
        <button className="cta-button">Check Out</button>
      </div>
    </div>
    </div>
  );
};

export default ImageWithText;