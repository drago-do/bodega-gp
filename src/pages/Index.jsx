import React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <Container maxWidth="sm">
      <div className="container-flex-column-center-space height-view">
        <img
          src="https://www.grupak.com.mx/images/grupak_papel_carton_g.png"
          alt="Logo Grupak"
        />
        <h1>
          Bienvenido a{" "}
          <span className="Grupak-text"> Administración Bodega</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in
          perspiciatis quas velit aperiam sed dicta commodi sapiente. Mollitia
          non incidunt eaque quam aperiam laborum illo officia impedit, omnis
          cupiditate.
        </p>
        <Button variant="contained">
          <Link to={"/login"}> Iniciar Sesión</Link>
        </Button>
      </div>
    </Container>
  );
}
