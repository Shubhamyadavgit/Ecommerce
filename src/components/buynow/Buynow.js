import React from "react";
import "./buynow.css";
import Right from "./Right";
import Subtotal from "./Subtotal";
import Option from "./Option";
import { Divider } from "@mui/material";
const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />
          <div className="item_containert">
            <img
              src="https://m.media-amazon.com/images/I/71UJ2wDsRvL.jpg"
              alt=""
            />
            <div className="item_details">
              <h3>Molife Sense 500 Smartwatch (Balck strap,Freesize)</h3>
              <h3>Smart Watches</h3>
              <h3 className="diffrentprice">Rs. 4089.00</h3>
              <p className="unusuall">Usually dispatched in 8 days.</p>
              <p>Eligible for free Shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt=""
              />
              <Option />
            </div>
            <h3 className="item_price">Rs. 4049.00</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
        <Right/>
      </div>
    </div>
  );
};

export default Buynow;
