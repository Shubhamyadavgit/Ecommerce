import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
           <NavLink to="/"> <img src="./amazon_PNG25.png" alt=""></img> </NavLink>
          </div>
          <div className="nav_searchBaar">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for products"
            ></input>
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav-btn">
            <NavLink to="/login">Sign in</NavLink>
          </div>
          <div className="cart-btn">
            <Badge badgeContent={4} color="primary">
             <ShoppingCartIcon id = 'icon'/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
