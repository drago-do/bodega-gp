import React from "react";
import Typography from "@mui/material/Typography";

const Introduction = () => {
  return (
    <div style={{ padding: "25px", textAlign: "center" }}>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginBottom: "25px" }}
      >
        Bienvenido a nuestra aplicación de control de almacén
      </Typography>
      <Typography variant="body1">
        Esta aplicación le permite consultar secciones, hacer búsquedas y
        mantener un control eficiente de su almacén. Desarrollada con las
        tecnologías de React y ExpressJS, y con una base de datos MySQL, esta
        aplicación es fácil de usar y confiable.
      </Typography>
    </div>
  );
};

export default Introduction;
