import React from "react";
import "./About.css";
import { icons, images } from "../../assets/assets";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__image">
          <img src={images.aboutUs} alt="" />
        </div>

        <div className="about__right">
          <h6>More about Furniro</h6>
          <h1>Hi, we're Furniro!</h1>
          <p>
            Furniro is a new-generation design brand offering a versatile range
            of top-notch sideboards, poufs, beds, and tables, already delivered
            to over 10,000 customers across 10 countries. The home of bold ideas
            and timeless designs, leaving plenty of room for your personality.
            Already feeling at home?
          </p>

          <div className="highlight-stats">
            <div className="item">
              {/* <img src={icons.furniture} alt="" /> */}
              <icons.Furniture />
              <p>150+ original furniro designs</p>
            </div>

            <div className="item">
              {/* <img src={icons.heart} alt="" /> */}
              <icons.Heart />
              <p>10 000+ happy customers</p>
            </div>

            <div className="item">
              {/* <img src={icons.globe} alt="" /> */}
              <icons.Globe />
              <p>Materials sourced only from the EU</p>
            </div>

            <div className="item">
              {/* <img src={icons.location} alt="" /> */}
              <icons.Location />
              <p>Produced locally in Poland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
