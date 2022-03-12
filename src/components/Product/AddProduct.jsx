import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        height: "100vh",
        padding: "20vh auto",
      }}
    >
      <center variant="h6" gutterBottom>
        <h2 sx={{ fontFamily: "Monospace" }}>Добро Пожаловать Админ!</h2>
      </center>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: "10vh auto",
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "#ffffff",
        }}
      >
        <form>
          <TextField
            my="10px"
            fullWidth
            id="outlined-basic"
            label="НАЗВАНИЕ ТУРА"
            variant="outlined"
            name="name"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="ОПИСАНИЕ ТУРА"
            variant="outlined"
            name="description"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="ЦЕНА ТУРА"
            variant="outlined"
            name="price"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="ФОТОГРАФИЯ"
            variant="outlined"
            name="picture"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="ТИП ТУРА"
            variant="outlined"
            name="type"
            onChange={handleInp}
          />
          <Stack direction="row" spacing={2} sx={{ bgcolor: "#0288d1" }}>
            <Button
              id="button"
              sx={{
                bgcolor: "#263201",
                borderColor: "error.main",
                fontFamily: "Monospace",
              }}
              color="error"
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => {
                addProduct(product);

                navigate("/products");
              }}
            >
              Добавить Тур!
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
  );
};

export default AddProduct;
