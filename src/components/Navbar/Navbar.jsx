import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logotip from "../../assetcs/images/navbar/Logo.svg";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import { ADMIN } from "../../helpers/consts";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import style from "../Navbar/Navbar.module.css";

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "О нас", link: "/about", id: 2 },
  { name: "Контакты", link: "/contact", id: 7 },
  { name: "Туры", link: "/service", id: 4 },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#212121", height: 60, width: "100vw" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {/* ADMIN PANEL */}
              {email == ADMIN ? (
                <MenuItem>
                  <Link to="/admin">
                    <Typography textAlign="center">Панель Админа </Typography>
                  </Link>
                </MenuItem>
              ) : null}
              {/* ADMIN PANEL */}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img className={style.img} src={logotip} alt="" />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  className="page-btn"
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 0, color: "white", display: "block", fontSize: 13 }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {/* ADMIN PANEL */}
            {email == ADMIN ? (
              <Link to="/admin">
                <Button
                  className="page-btn"
                  sx={{ my: 0, color: "white", display: "block", fontSize: 13 }}
                >
                  Панель Админа
                </Button>
              </Link>
            ) : null}
          </Box>

          <Typography variant="h5">
            {email ? (
              <Link to="/">
                <Button
                  className="page-btn"
                  sx={{
                    color: "white",
                    display: "block",
                    fontSize: 10,
                    padding: "0",
                  }}
                  onClick={handleLogout}
                >
                  Выход
                </Button>
              </Link>
            ) : null}

            {email ? null : (
              <Link to="/auth">
                <Button
                  className="page-btn"
                  sx={{
                    color: "white",
                    display: "block",
                    fontSize: 10,
                    padding: "0",
                  }}
                  onClick={handleLogout}
                >
                  Вход
                </Button>
              </Link>
            )}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
