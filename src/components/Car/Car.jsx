import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Car = () => {
  const [count, setCount] = React.useState([]);

  const { car, getCar, changeProductCountFav, deleteCartProductsFav } =
    useProducts();

  // const handleCountChange = (count, id) => {
  //   if (count <= 0 || count >= 1000) {
  //     count = 1;
  //     changeProductCountFav(count, id);
  //   } else {
  //     changeProductCountFav(count, id);
  //   }
  // };
  React.useEffect(() => {
    getCar();
  }, []);
  return (
    <div className=".cont">
      <Card sx={{ margin: "0 auto", marginTop: "5vh", maxWidth: 320 }}>
        {car.products.map((row) => (
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              img
              src={row.item.picture}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {row.item.description}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {row.item.price} - сом
              </Typography>
            </CardContent>
            <Button
              sx={{ marginLeft: "234px", color: "red", border: 1 }}
              onClick={() => deleteCartProductsFav(row.item.id)}
            >
              Удалить
            </Button>
            <Link to=".products">
              <Button sx={{ marginTop: "-55px", color: "red", border: 1 }}>
                Назад
              </Button>
            </Link>
          </CardActionArea>
        ))}
      </Card>
    </div>
  );
};

export default Car;
