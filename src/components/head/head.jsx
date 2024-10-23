import React from "react";
import "./head.css";
import { Link } from "react-router-dom";
import logo from "../../asset/logo/car.png";

const Head = () => {
  return (
    <header>
      <div className="head_container">
        <div className="left_head">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="middle_head">
          <Link className="costum_link" to="./">
            main
          </Link>
          <Link className="costum_link" to="./rental">
            rental
          </Link>
          <Link className="costum_link" to="./prices">
            prices
          </Link>
          <Link className="costum_link" to="./contacts">
            contacts
          </Link>
          <Link className="costum_link" to="./review">
            review
          </Link>
          <Link className="costum_link" to="./aboutus">
            aboutus
          </Link>
          {/* <button className="login_button">
            <Link className="login_link" to="./login">
              login
            </Link>
          </button>
          <button className="registration_button">
            <Link className="signup_link" to="./registration">
              sign up
            </Link>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Head;
