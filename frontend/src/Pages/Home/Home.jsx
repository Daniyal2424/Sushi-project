import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-img">
          <img src="/images/pexels-huy-phan-316220-1422384.jpg" alt="" />
        </div>
        <div className="home-content">
          <div className="home-content_icon">
            <i className="bx bxs-bowl-hot"></i>
          </div>
          <div className="home-content_title">
            <h1>MY SUSHI</h1>
          </div>
          <h3>
            Доставка суши, роллов,
            <br /> пиццы в Алматы
          </h3>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
