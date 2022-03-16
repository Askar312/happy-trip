import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext, useProducts } from "../../contexts/ProductContext";
import style from "../Product/style/ProductDetail.module.css";
import HeartIcon from "../../assetcs/images/navbar/heart.png";
import { useTheme } from "@mui/material/styles";

import { useAuth } from "../../contexts/AuthContext";
const TourDetails = () => {
  const { getProductDetails, saveEditedProduct, productDetails } =
    useProducts();
  const { addAndDeleteLikes } = useContext(productContext);
  const [com, setCom] = useState({});

  const { user } = useAuth();
  //coments
  const handleInput = (e) => {
    let d = new Date(Date.now());
    d.toString();
    setCom({
      email: user.email,
      comment: e.target.value,
      date: new Date().toLocaleString(),
    });
  };
  const theme = useTheme();

  const { id } = useParams();

  const [productComment, setProductComment] = React.useState({
    comments: "",
  });

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  useEffect(() => {
    setProductComment(productDetails);
  }, [productDetails]);

  console.log(productDetails, "from Details");

  const sendComment = async (e, id, productos) => {
    let newComment = [...productos.comments];
    newComment.push(com);
    let productWithComment = {
      ...productos,

      comments: newComment,
    };
    const data = await saveEditedProduct(productWithComment);
  };

  console.log(productDetails.comments);

  productDetails && productDetails.comments
    ? productDetails.comments.map((com) => {
        console.log(com, "comment@!!");
      })
    : console.log("did not work");
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
          <div>
            <div className={style.coment}>
              {productDetails && productDetails.comments ? (
                productDetails.comments.map((com) => (
                  <div>
                    <p>{com.email} - user </p>
                    <p>Оставил коментарий - "{com.comment}"</p>
                  </div>
                ))
              ) : (
                <p>Пока коментариев нету! Оставтье свой коментарий</p>
              )}
            </div>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Коментарий"
              variant="outlined"
              name="comments"
              onChange={(e) => handleInput(e)}
            />
            <Link to="/products">
              <Button
                id="button"
                variant="outlined"
                size="large"
                fullWidth
                onClick={(e) =>
                  sendComment(e, productComment.id, productComment)
                }
              >
                Оставьте коментарий
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Link className={style.buttonDetail} to="/products">
            <Button>Назад</Button>
          </Link>
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
        </div>
      </div>
    </>
  );
};

export default TourDetails;
