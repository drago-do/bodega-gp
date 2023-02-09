import { useState, useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import Cookies from "js-cookie";

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(Cookies.get("user"));

  useEffect(() => {
    if (user) {
      window.location.href = "/admin/bodega";
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("user") === "admin" && data.get("password") === "admin") {
      setError(false);
      setLoading(true);
      if (data.get("remember")) {
        Cookies.set("user", data.get("user"));
      } else {
        Cookies.set("user", data.get("user"), { expires: 1 });
      }
      setTimeout(() => {
        window.location.href = "/admin/bodega";
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "var(--secondary-background-color)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuario"
            name="user"
            autoComplete="user"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value={true} color="primary" />}
            label="Guardar sesión"
            name="remember"
          />
          <Alert
            style={{ display: error ? "flex" : "none" }}
            variant="filled"
            severity="error"
          >
            Usuario o contraseña incorrectas.
          </Alert>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar sesión
          </Button>
        </Box>
        <div
          style={{ display: loading ? "block" : "none" }}
          className="basic-circle-anim"
        ></div>
      </Box>
    </Container>
  );
}
