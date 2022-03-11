import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assetcs/images/navbar/Logo.svg";

import "../Navbar/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <img className="imgLogo" src={logo} alt="" />
      <ul className={active}>
        <Link to="/">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
        </Link>
        <Link to="/about">
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
        </Link>
        <Link to="/contact">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </Link>
        <Link to="/service">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Service
            </a>
          </li>
        </Link>
        <Link to="/login">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Login
            </a>
          </li>
        </Link>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
