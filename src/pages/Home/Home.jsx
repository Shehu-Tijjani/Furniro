import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CustomerMenu from "../../components/CustomerMenu/CustomerMenu";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import About from "../../components/About/About";
import Explore from "../../components/Explore/Explore";

function Home() {
  return (
    <>
      <Header />
      <CustomerMenu />
      <RecommendedProducts />
      <Explore />
      <About />
    </>
  );
}

export default Home;
