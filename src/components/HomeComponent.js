import React from "react";
import homeImg from "../assets/images/home.png";
import "../App.css";

const Home = () => {
  return (
    <div className="home col-sm-12 col-10">
      <div className="row">
        <div className="col-sm-10 col-xl-4 col-12 home-welcome">
          <h2>WELCOME TO HGE</h2>
          <p>
            HOME GYM EQUIPMENT is one of the most respected names in the industry, specializing
            in high-quality used fitness equipment.<span> We serve the best
            second-hand good quality home gym equipment. You can view our
            products and if you are interested you can easily create an account
            and then login and easily buy from online.</span>
          </p>
        </div>
        <div className="homeImg col-sm-7 col-xl-4 col-12">
          <img src={homeImg} className="col-12 home-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
