import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Menu from "./pages/components/Menu";

import { green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

export default function Layout() {
  const [menuActivo, setMenuActivo] = useState(false);
  const handleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  return (
    <>
      <Menu activo={menuActivo} />

      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color={menuActivo ? "black" : "inherit"}
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
                style={{ zIndex: "3" }}
              >
                {menuActivo ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Administración bodega{" "}
              </Typography>
              <Button color="inherit">Cerrar Sesión</Button>
            </Toolbar>
          </AppBar>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}
