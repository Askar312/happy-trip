import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const EditTour = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div>
      <Box
        sx={{
          bgcolor: "rgb(207, 201, 201)",
          height: "100vh",
          padding: "20vh auto",
        }}
      >
        <center variant="h6" gutterBottom>
          Добро Пожаловать Админ ! <br />
          Хотите что то поменять ?
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: "#f3e5f5",
          }}
        >
          <form>
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="НАЗВАНИЕ"
              variant="outlined"
              name="name"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="ОПИСАНИЕ"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="ЦЕНА"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="ФОТОГРАФИЯ"
              variant="outlined"
              name="picture"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="ТИП"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: "#880e4f" }}>
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
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                ИЗМЕНЕНИЕ ПРОДУКТА
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditTour;
