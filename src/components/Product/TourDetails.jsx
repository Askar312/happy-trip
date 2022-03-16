import { Button, Grid, Modal, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext, useProducts } from "../../contexts/ProductContext";
import style from "../Product/style/ProductDetail.module.css";
import HeartIcon from "../../assetcs/images/navbar/heart.png";
import MediaCard from "./TourCard";
const TourDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails, comments, getComment } =
    useProducts();
  const { addAndDeleteLikes, addComments } = useContext(productContext);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);
  useEffect(() => {
    getComment(id);
  }, [id]);
  //coments
  const [comment, setComment] = useState({
    user: "",
    comment: "",
  });
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...comment,
        [e.target.name]: Number(e.target.value),
      };

      setComment(obj);
    } else {
      let obj = {
        ...comment,
        [e.target.name]: e.target.value,
      };

      setComment(obj);
    }
  };
  //comments end

  return (
    <>
      <div className={style.detailsWrap}>
        <div>
          <img
            className={style.detailImg}
            src={productDetails.picture}
            alt=""
          />
        </div>
        <div className={style.detailsList}>
          <h2 className="title">
            <span className={style.detailSpan}>Название тура - </span>
            {productDetails.name}
          </h2>
          <h3 className="price">
            <span className={style.detailSpan}>Цена тура - </span>
            {productDetails.price}
          </h3>
          <h3 className="descr">
            <span className={style.detailSpan}>Описание тура - </span>
            {productDetails.description}
          </h3>
        </div>
        <Link to="/products/:id">
          <p className={style.pDetails}>
            LIKE-{productDetails.likes}
            <img
              style={{ cursor: "pointer" }}
              onClick={() => addAndDeleteLikes(productDetails)}
              src={HeartIcon}
              alt=""
            />
          </p>
        </Link>
        <div>
          <Link className={style.buttonDetail} to="/products">
            <Button>Назад</Button>
          </Link>
          {/* <TextField
            my="10px"
            fullWidth
            id="outlined-basic"
            label="Ваше имя"
            variant="outlined"
            name="user"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Коментарий"
            variant="outlined"
            name="comment"
            onChange={handleInp}
          />{" "}
          <Stack direction="row" spacing={1} sx={{ bgcolor: "#0288d1" }}>
            <Button
              id="button"
              sx={{
                bgcolor: "#263238",
                borderColor: "error.main",
                fontFamily: "Monospace",
              }}
              color="error"
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => {
                addComments(comment);
              }}
            >
              Добавить коментарийий
            </Button>
          </Stack>
        </div>
        <div className="blog-left">
          <Grid container>
            {comments ? (
              comments.map((item) => (
                <Grid item>
                  <MediaCard item={item} key={item.id} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )} */}
          {/* </Grid> */}
        </div>
      </div>
    </>
  );
};

export default TourDetails;
