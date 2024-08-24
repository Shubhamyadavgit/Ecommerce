import React from "react";
import "./footer.css";
const footer = () => {
    const year = new Date().getFullYear();
    console.log(year);
    
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to know Us</h3>
          <p>About Us</p>
          <p>Carrers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footer_details_one">
          <h3>Connext with us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer_details_one">
          <h3>Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p> 
        </div>
        <div className="footer_details_one">
          <h3>Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p> 
        </div>
      </div>
      <div className="lastdetails">
        <img src="./amazon_PNG25.png" alt=""/>
        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default footer;
