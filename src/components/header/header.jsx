import "./header.css";
import React, { useState } from "react";
import logo from "../../asset/logo/car.png";
import russia from "../../asset/flag/russia.png";
import uk from "../../asset/flag/united-kingdom.png";
import georgia from "../../asset/flag/georgia.png";

const Header = () => {
  const [showFlags, setShowFlags] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(uk); // Default flag is Russia

  const toggleFlags = () => {
    setShowFlags((prevShowFlags) => !prevShowFlags);
  };

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setShowFlags(false); // Hide flags after selecting one
  };

  return (
    <header className="header">
      <div className="main_logo">
        <img src={logo} alt="Car Logo" />
      </div>

      <nav className="main.nav.menu">
        <span className="main">main</span>
        <span className="rental">rental</span>
        <span className="prises">prices</span>
        <span className="contacts">contacts</span>
        <span className="review">review</span>
        <span className="aboutus">about us</span>
      </nav>

      <div className="language_bar">
        {/* The main flag will be the selected one */}
        <img
          src={selectedFlag}
          alt="Selected Flag"
          className="flag"
          onClick={toggleFlags}
        />

        {/* Other flags appear on click, with smooth animation */}
        <div className={`flag_list ${showFlags ? "show" : ""}`}>
          {selectedFlag !== russia && (
            <img
              src={russia}
              alt="Russian Flag"
              className="flag flag-animate"
              onClick={() => handleFlagClick(russia)}
            />
          )}
          {selectedFlag !== uk && (
            <img
              src={uk}
              alt="UK Flag"
              className="flag flag-animate"
              onClick={() => handleFlagClick(uk)}
            />
          )}
          {selectedFlag !== georgia && (
            <img
              src={georgia}
              alt="Georgia Flag"
              className="flag flag-animate"
              onClick={() => handleFlagClick(georgia)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
