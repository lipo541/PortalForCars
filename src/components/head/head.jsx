import React from "react";
import "./head.css";
import vehicle from "../../asset/logo/vehicle.png";
import login from "../../asset/logo/log-in.png";

const Head = () => {
  return (
    <header>
      <div className="head_container">
        <div className="left_head">
          <img src={vehicle} alt="" />
        </div>
        <div className="middle_head">
          <input className="search" type="search" />
          <button className="search_button">search</button>
        </div>
        <div>
          <img className="login_logo" src={login} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Head;
