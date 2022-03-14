import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "../Product/style/Product.module.css";

export default function MediaCard({ item }) {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const navigate = useNavigate();

  const {
    user: { email },
  } = useAuth();

  return (
    <div className={style.card_page}>
      <Card>
        <div className={style.cardProduct}>
          <CardMedia component="img" height="245" image={item.picture} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {item.price}сом
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          {email === ADMIN ? (
            <>
              {" "}
              <Button size="small" onClick={() => deleteProduct(item.id)}>
                Удалить
              </Button>
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                Изменить
              </Button>
            </>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <ShoppingCartIcon
                color={checkProductInCart(item.id) ? "secondary" : ""}
              />
            </IconButton>
          )}

          <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
            О товаре
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
