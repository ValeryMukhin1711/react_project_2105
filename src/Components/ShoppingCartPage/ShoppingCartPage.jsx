import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import basket from '../../store/Basket';
import { observer } from 'mobx-react-lite';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const items = basket.items;

  const totalPrice = (arr)=>{
    let summ = 0
    arr.map((el)=>{
      el.discont_price ? summ += el.discont_price :
      summ += el.price
          })
          return summ
  }



  return (
    <>
      <Header />

      <div className="sale-container">
        <div className="sale-content">
          <div className="sale-header">
            <h1 className="sale-title">Shopping Cart</h1>
            {/* <button className="sale-button">All Products</button> */}
            <h2><i>Total items: {items.length}</i></h2>
            <h2><i>Total price: ${totalPrice(items)}</i></h2>
            
          </div>
          <div className="sale-items">
            {[...items].map((item, index) => (
              <div key={index} className="sale-item">
                {item ? (
                  <>
                    <div className="image-container">
                      <img
                        src={`http://localhost:3333/${item.image}`}
                        alt={item.title}
                        className="sale-image"
                      />
                      {/* <div className="discount-badge">
                      -{' '}
                      {Math.round(
                        100 - (item.discont_price / item.price) * 100
                      )}
                      %
                    </div> */}
                    </div>

                    <h3 className="sale-item-title">{item.title}</h3>
                    <p className="sale-price">
                    {
                      item.discont_price ? 
                      <span className="new-price">
                      ${item.discont_price.toFixed(2)}
                    </span>: null}
                    <span className="old-price">
                      ${item.price.toFixed(2)}
                    </span> 
                    
                  </p>
                  {/* <button onClick={()=> handleRemoveButton(item)}>Remove from Cart</button> */}
                  <button onClick={()=> basket.removeItem(item.id)}>Remove from Cart</button>
                  </>
                ) : (
                  <div className="empty-sale-item"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default observer(ShoppingCartPage)
