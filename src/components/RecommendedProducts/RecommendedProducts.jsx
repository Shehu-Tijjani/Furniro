import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./RecommendedProducts.css";
import {
  icons,
  recomProductimages1,
  recomProductimages2,
} from "../../assets/assets";

// const KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhYzE1MjQ1ZDE5NjExNmVlNzJhN2MwIiwiYWRtaW4iOmZhbHNlfSwiaWF0IjoxNzU2MTA4MDY4LCJleHAiOjE3NTYxNDQwNjh9.asAclFFRy7LBERHJSBZrq0vkln1UWuhQ1vadzR00vSU";

const productNames = [
  "Flom Sofa",
  "Hido Sideboard",
  "Lino Throw",
  "Met TV Stand",
  "Nok Stool",
  "Streiko Bed",
  "Teidi Shelving",
  "Ubi Armchair",
  "Vilu Bowl",
];

const productsColors = {
  flomSofa: ["Blue", "Gray"],
  hidoSideboard: ["White", "Black"],
  linoThrow: ["Gray", "Beige"],
  metTvStand: ["Black", "White"],
  nokStool: ["Brown", "Gray"],
  streikoBed: ["Beige", "White"],
  teidi: ["Black", "White"],
  ubiArmchair: ["Green"],
  viluBowl: ["Red"],
};

const productsData = recomProductimages1.map((image, index) => ({
  id: index + 1,
  image: image,
  name: productNames[index % productNames.length],
  price: `$${(Math.random() * 1000).toFixed(2)}`,
  color:
    productsColors[
      Object.keys(productsColors)[index % Object.keys(productsColors).length]
    ] || [],
}));

function RecommendedProducts() {
  return (
    <div className="recomProducts">
      <div className="container">
        <h1>Recommended Products</h1>

        <RecomProductList />
      </div>
    </div>
  );
}

function RecomProductList() {
  const [colorHovered, setColorHovered] = useState("");
  const [productId, setProductId] = useState(0);
  const [slidePositionIndex, setSlidePositionIndex] = useState(0);
  const [displayArrRight, setDisplayArrRight] = useState(true);
  const [displayArrLeft, setDisplayArrLeft] = useState(false);

  const containerRef = useRef({});

  // const [slidePositionIndex, setSlidePositionIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerView;

      if (window.innerWidth <= 650) {
        newItemsPerView = 1;
      } else if (window.innerWidth <= 1100) {
        newItemsPerView = 2;
      } else {
        newItemsPerView = 3;
      }

      setItemsPerView(newItemsPerView);

      const maxSlideIndex = productNames.length - newItemsPerView;
      setSlidePositionIndex((prev) => Math.min(prev, maxSlideIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSlideLeft() {
    if (slidePositionIndex > 0) {
      setSlidePositionIndex((num) => num - 1);
    }

    if (slidePositionIndex === 1) {
      setDisplayArrLeft(false);
      setDisplayArrRight(true);
    }

    slidePositionIndex <=
      productNames.length -
        (window.innerWidth <= 650 ? 1 : window.innerWidth <= 1100 ? 2 : 3) &&
      setColorHovered(true);

    setDisplayArrRight(true);
  }

  function handleSlideRight() {
    slidePositionIndex <
      productNames.length -
        (window.innerWidth <= 650 ? 1 : window.innerWidth <= 1100 ? 2 : 3) &&
      setSlidePositionIndex((num) => num + 1);

    slidePositionIndex ===
      productNames.length -
        (window.innerWidth <= 650 ? 1 : window.innerWidth <= 1100 ? 2 : 3) -
        1 && setDisplayArrRight(false);

    setDisplayArrLeft(true);
  }

  return (
    <div className="recomProducts__list">
      <div
        onClick={handleSlideLeft}
        className={`arrow__wrapper ${
          productsData.length ? "leftArr" : "hide"
        } ${!displayArrLeft && "fade"}`}
      >
        <icons.Arrow />
      </div>

      <div
        onClick={handleSlideRight}
        className={`arrow__wrapper ${
          productsData.length ? "rightArr" : "hide"
        } ${!displayArrRight && "fade"}`}
      >
        <icons.Arrow />
      </div>

      {!productsData.length
        ? Array.from({ length: 3 }).map((_, i) => {
            return (
              <div key={i} className="recomProducts__card">
                <div
                  style={{ backgroundColor: "#f4f5f7ce" }}
                  className="recomProducts__image"
                ></div>
                <div
                  style={{
                    backgroundColor: "#f4f5f7ce",
                    height: "10px",
                    width: "30%",
                  }}
                  className="recomProducts__colors"
                ></div>
                <div
                  style={{
                    backgroundColor: "#f4f5f7ce",
                    height: "10px",
                    width: "60%",
                  }}
                  className="recomProduct__title"
                ></div>
                <div
                  style={{
                    backgroundColor: "#f4f5f7ce",
                    height: "10px",
                    width: "30%",
                  }}
                  className="recomProduct__price"
                ></div>
              </div>
            );
          })
        : productsData.map((product, proIndex) => (
            <div
              key={product.id}
              className="recomProducts__card"
              style={{
                transform: `translateX(calc(-${slidePositionIndex}00% - ${
                  slidePositionIndex * 3
                }0px))`,
              }}
            >
              <Link to="" className="recomProducts__image">
                <div className="wishlist-icon">
                  <icons.Heart />
                </div>

                <div className="overlay">
                  <div className="image__wrapper">
                    <img src={recomProductimages2[proIndex]} alt="" />
                  </div>
                </div>

                <img src={product.image} alt={product.name} />
              </Link>

              {product.color.length > 0 && (
                <div className="recomProducts__colors">
                  {product.color.map((color, index) => (
                    <div
                      ref={(el) => {
                        return (containerRef.current[`${proIndex} - ${index}`] =
                          el);
                      }}
                      onMouseEnter={(e) => {
                        setColorHovered(color);
                        setProductId(product.id);
                      }}
                      onMouseLeave={() => {
                        setColorHovered("");
                      }}
                      key={index}
                      className="color-wrap"
                    >
                      {colorHovered &&
                        createPortal(
                          <div
                            className={
                              (product.color[index] === colorHovered) &
                              (product.id === productId)
                                ? "toolTip show-toolTip"
                                : "toolTip"
                            }
                            id={product.id}
                            style={{
                              top:
                                colorHovered &&
                                containerRef.current[
                                  `${proIndex} - ${index}`
                                ]?.getBoundingClientRect().top +
                                  window.scrollY -
                                  37,
                              left:
                                colorHovered &&
                                containerRef.current[
                                  `${proIndex} - ${index}`
                                ]?.getBoundingClientRect().left +
                                  window.scrollX,
                            }}
                          >
                            {colorHovered}
                          </div>,
                          document.body
                        )}

                      <div
                        key={index}
                        style={{ backgroundColor: color }}
                        className="color-badge"
                      ></div>
                    </div>
                  ))}
                </div>
              )}

              <Link to="" className="recomProduct__title">
                {product.name}
              </Link>

              <p className="recomProduct__price">{product.price}</p>
            </div>
          ))}
    </div>
  );
}

export default RecommendedProducts;
