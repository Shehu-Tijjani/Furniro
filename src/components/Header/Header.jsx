import React from "react";
import "./Header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1>Discover Our New Collection</h1>
        <Button
          padding="12px 32px"
          fontSize="14px"
          fontWeight="500"
          hoverBgColor="#f0f0f0d2"
          hoverTextColor="#333"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
}

export default Header;
