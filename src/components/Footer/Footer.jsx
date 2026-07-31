import React from "react";
import "./Footer.css";
import { icons } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top small-font">
          <div className="col col-1">
            <h3>Hotline</h3>
            <p>
              <span className="icon">
                <icons.Phone />
              </span>
              Hotline: <span className="tel-num">+48 123456789</span>
            </p>
            <p>
              <span className="icon">
                <icons.FooterGlobe />
              </span>
              Hotline available in English
            </p>
          </div>

          <ul className="col col-2">
            <h6 className="light">Customer Service</h6>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>

          <ul className="col col-3">
            <h6 className="light">Terms & policies</h6>
            <li>
              <a href="">Shipping policy</a>
            </li>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Refund policy</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h6 className="light">Stay in touch: </h6>
          <div className="icons">
            <span className="icon">
              <a href="#">
                <icons.Facebook fill="rgb(158, 158, 158)" />
              </a>
            </span>{" "}
            <span className="icon">
              <a href="#">
                <icons.Instagram fill="rgb(158, 158, 158)" />
              </a>
            </span>{" "}
            <span className="icon">
              <a href="#">
                <icons.Pinterest fill="rgb(158, 158, 158)" />
              </a>
            </span>
          </div>
        </div>
        <h6 className="copyright">2025 Furniro Version-Tijjani</h6>
      </div>
    </div>
  );
}

export default Footer;
