import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ marginBottom: "0" }}
    >
      {"Happy Trip KG © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();

  return (
    <Box sx={{ bgcolor: "#fffff", padding: 9 }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#d81b60" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Авторизация
            </Typography>
            <Box component="form" noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Адрес"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />

              {hasAccount ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#263238",
                    borderColor: "error",
                    fontFamily: "Monospace",
                    color: "#d50000",
                  }}
                  onClick={handleLogin}
                >
                  Войти
                </Button>
              ) : (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: "#263238",
                    borderColor: "error.main",
                    fontFamily: "Monospace",
                    color: "#d50000",
                  }}
                  onClick={handleSignUp}
                >
                  Зарегистрироваться
                </Button>
              )}

              <Grid container sx={{ marginBottom: 3 }}>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  {hasAccount ? (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      sx={{ color: "#d50000" }}
                    >
                      {"Нет аккаунта ? Зарегистрируйтесь"}
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      sx={{ color: "#d50000" }}
                    >
                      {"Есть аккаунт ? Войдите"}
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
}
