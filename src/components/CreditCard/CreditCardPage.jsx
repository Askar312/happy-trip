import React from "react";
import style from "../CreditCard/Card.module.css";

import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreditCardPage = () => {
  const navigate = useNavigate();

  const handleAlert = () => {
    alert("Заказ принять! Ожидайте звонка от наших специалистов");
    navigate("/");
  };
  return (
    <div className={style.containers}>
      <h2 className={style.h2Text}>Страница оплаты</h2>
      <TextField
        sx={{ my: 3, mx: 5, width: "50vw" }}
        helperText=" Введите имя*"
        id="demo-helper-text-aligned"
        label="Имя"
      />
      <TextField
        sx={{ my: 3, mx: 5, width: "50vw" }}
        helperText=" Введите номер телефона*"
        id="demo-helper-text-aligned"
        label="Номер телефона"
      />

      <Button
        onClick={handleAlert}
        className={style.btncard}
        variant="contained"
        color="success"
      >
        Оформить Заказ
      </Button>
    </div>
  );
};

export default CreditCardPage;
