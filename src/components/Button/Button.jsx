import React, { useState } from "react";

function Button({
  children,
  onClick = () => {},
  className = "",
  padding = "10px 20px",
  backgroundColor = "#fff",
  hoverBgColor = "rgba(256, 256, 256, 256..6)",
  color = "##000",
  hoverTextColor = "#000",
  border = "none",
  borderRadius = "5px",
  fontSize = "16px",
  fontWeight = "500",
  fontFamily = "Poppins, sans-serif",
  transitions = ["background-color .3s", "color .3s"],
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyles = isHovered
    ? {
        backgroundColor: hoverBgColor,
        color: hoverTextColor,
      }
    : {};

  const baseStyles = {
    padding,
    backgroundColor,
    color,
    border,
    borderRadius,
    fontSize,
    fontWeight,
    fontFamily,
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    transition: `${transitions.map((el) => el)}`,
  };

  const combinedStyles = {
    ...baseStyles,
    ...hoverStyles,
  };

  return (
    <button
      style={combinedStyles}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

export default Button;
