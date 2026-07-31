import React from "react";
import "./CustomerMenu.css";
import { menuImages } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CustomerMenu() {
  useEffect(() => {
    try {
      const productsData = async function () {
        const response = await fetch("http://localhost:4000/products/1", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "upload this sofa" }),
        });
        const data = await response.json();
        console.log(data);
      };

      productsData();
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  const menuItems = [
    { name: "Sofas", image: menuImages.sofas },
    { name: "Beds", image: menuImages.beds },
    { name: "Storage", image: menuImages.storage },
    { name: "Armchairs", image: menuImages.armchairs },
    { name: "Accessories", image: menuImages.accessories },
    { name: "TV Stands", image: menuImages.tvStands },
  ];

  return (
    <div className="customer-menu">
      <div className="container">
        <h1>Our customers' top picks</h1>

        <div className="menu">
          {menuItems.map((item, index) => (
            <Link to="" className="menu-item" key={index}>
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
              </div>
              <p className="menu-name">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerMenu;
