import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProducts } from "../../contexts/ProductContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const [count, setCount] = React.useState([]);

  const { cart, getCart, changeProductCount, deleteCartProducts } =
    useProducts();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const handleCountChange = (count, id) => {
    if (count <= 0 || count >= 1000) {
      count = 1;
      changeProductCount(count, id);
    } else {
      changeProductCount(count, id);
    }
  };
  return (
    <TableContainer
      className="cont"
      sx={{ marginBottom: 49 }}
      component={Paper}
    >
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Наименование</StyledTableCell>

            <StyledTableCell align="right">Количество</StyledTableCell>

            <StyledTableCell align="right">Удаление</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <StyledTableRow key={row.item.name}>
              <StyledTableCell className="textCard" align="left">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    handleCountChange(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>{" "}
              <StyledTableCell align="right">
                <Button
                  sx={{ marginRight: "5px", color: "red", border: 1 }}
                  onClick={() => deleteCartProducts(row.item.id)}
                >
                  Удалить
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={"/buy"}>
        <Button
          sx={{ width: "200px", color: "red", border: 1, my: 1, mx: 1 }}
          onClick={cartCleaner}
        >
          Купить за {cart.totalPrice} сом
        </Button>
      </Link>
    </TableContainer>
  );
}
