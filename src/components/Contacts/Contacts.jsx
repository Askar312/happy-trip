import React from "react";
// import Footer from "../Footer/Footer";
import style from "../Contacts/Contacts.module.css";
import Footer from "../Footer/Footer";

const Contacts = () => {
  return (
    <>
      <center>
        <h2> Наши Контакты</h2>
        <h3>Добро пожаловать в Happy Trip</h3>
        <img
          className={style.imageCon}
          src="https://oir.mobi/uploads/posts/2021-05/1622302223_5-oir_mobi-p-priroda-kirgizstana-priroda-krasivo-foto-5.jpg"
          alt=""
        />
      </center>
      <div className={style.container}>
        <iframe
          className={style.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46774.21323490398!2d74.59645224113065!3d42.88575302653914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7QviDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1647355737474!5m2!1sru!2skg"
          height="450px"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
