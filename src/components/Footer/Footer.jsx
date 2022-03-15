import React from "react";
import style from "../Footer/Footer.module.css";
import logo from "../../assetcs/images/navbar/Logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.footerContainer}>
      <div className={style.contentItem}>
        <img className={style.contentItemImg} src={logo} alt="logo" />
      </div>
      <div className={style.footerContentItem}>
        <ul>
          <li onClick={() => navigate("/")}>Главная</li>
          <li onClick={() => navigate("/about")}>О нас</li>
          <li onClick={() => navigate("/slide")}>Фотографии</li>
          <li>
            <a target="_blank" href="https://web.telegram.org/z/#1971286174">
              Telegram bot
            </a>
          </li>
        </ul>
        <ul>
          <li>Контакты</li>
          <li>0706230770</li>
          <li>
            <a target="_blank" href="https://www.instagram.com/happy_trip.kg/">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/996706230770">
              WhatsApp
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://2gis.kg/bishkek/firm/70000001041515078?m=74.614487%2C42.875317%2F16"
            >
              Адрес
            </a>
          </li>
          <li>Кыргызстан</li>
          <li>Бишкек</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
