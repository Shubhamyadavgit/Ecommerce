import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();

  const [inddata, setInddata] = useState(null); // Initialize with null instead of an empty array

  const getinddata = async () => {
    const res = await fetch(`/getproductone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status !== 201) {
      console.log("No data available");
    } else {
      setInddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  // Check if inddata is null, and if so, return a loading message or a fallback UI
  if (!inddata) {
    return <div>Loading...</div>; // You can replace this with a spinner or any other loading indicator
  }

  return (
    <div className="cart_section">
    {inddata && Object.keys(inddata).length &&
      <div className="cart_container">
        <div className="left_cart">
          <img
            src={inddata.detailUrl}
            alt="cart_img"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{inddata.title.shortTitle}</h3>
          <h4>{inddata.title.longTitle}</h4>
          <Divider />
          <p className="mrp">Rs. {inddata.price.mrp}</p>
          <p>
            Deal of the Day:{" "}
            <span style={{ color: "#B12704" }}>Rs. {inddata.price.cost}.00</span>
          </p>
          <p>
            You save:{" "}
            <span style={{ color: "#B12704" }}>Rs.{inddata.price.mrp - inddata.price.cost}({inddata.price.discount})</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount: <span style={{ color: "#111" }}>{inddata.discount}</span>
            </h5>
            <h4>
              Free Delivery:{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Oct 8 -21
              </span>
              Details
            </h4>
            <p>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Item:{" "}
            <span
              style={{
                color: "#565959",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.1px",
              }}
            >
             {inddata.description}
            </span>
          </p>
        </div>
      </div>
    }    </div>
  );
};

export default Cart;
