import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assetcs/images/navbar/Logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";

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

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <nav className="nav">
      <img className="imgLogo" src={logo} alt="" />
      <ul className={active}>
        <Link to="/">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Главная
            </a>
          </li>
        </Link>
        <Link to="/about">
          <li className="nav__item">
            <a href="#" className="nav__link">
              О нас
            </a>
          </li>
        </Link>
        <Link to="/contact">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Контакты
            </a>
          </li>
        </Link>
        <Link to="/service">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Туры
            </a>
          </li>
        </Link>
        <Link to="/admin">
          {email == ADMIN ? (
            <li className="nav__item">
              <a href="#" className="nav__link">
                Админ П
              </a>
            </li>
          ) : null}
        </Link>

        {email ? (
          <Link to="/">
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={handleLogout}>
                Выход
              </a>
            </li>
          </Link>
        ) : null}

        {email ? null : (
          <Link to="/auth">
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={handleLogout}>
                Вход
              </a>
            </li>
          </Link>
        )}
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
