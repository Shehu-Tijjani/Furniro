import React from "react";
import "./Explore.css";
import Button from "../Button/Button";

function Explore() {
  return (
    <div className="explore">
      <div className="container">
        <div className="left">
          <h2>50+ Beautiful rooms inspiration</h2>

          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you.
          </p>

          <Button
            backgroundColor="white"
            fontSize="15px"
            color="rgb(156, 112, 9)"
            padding="15px 30px"
          >
            Explore More
          </Button>
        </div>

        <div className="Explore-slider">
          <div class="slider">
            <div class="slides"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
