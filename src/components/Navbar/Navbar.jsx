import React from "react";
import { icons } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [searchDisplay, setsearchDisplay] = useState(false);

  return (
    <nav>
      <div className="container">
        <div
          className={`hamburger ${hamburgerOpen ? "active" : ""}`}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>

        <div className="logo-flexbox">
          <Link to="/" className="logo">
            <icons.Logo />
            <h1>Furniro</h1>
          </Link>
        </div>

        <ul
          onClick={(e) => {
            if (!e.target.closest(".link")) return;
            setHamburgerOpen(false);
          }}
          className={`nav-links ${hamburgerOpen ? "active" : ""}`}
        >
          <div
            onClick={() => setHamburgerOpen(false)}
            className="HamMenuBgCloseTab"
          ></div>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="right-flexbox">
          <div className={searchDisplay ? "right addWidth" : "right"}>
            <a href="/login" className="user icon">
              <icons.UserIcon />
            </a>

            <form className={searchDisplay ? "search show" : "search"}>
              <input
                type="text"
                placeholder="Search for products..."
                aria-label="Search"
              />
              <span
                className="icon"
                onClick={() => setsearchDisplay(!searchDisplay)}
              >
                <icons.Search />
              </span>
            </form>

            <a href="/wishlist" className="wishlist icon">
              <icons.WishlistIcon />
            </a>

            <a href="/cart" className="cart icon">
              <icons.CartIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
