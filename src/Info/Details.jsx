import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Details = () => {
  return (
    <div style={{ padding: "25px" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Descripción detallada
      </Typography>
      <Box style={{ marginTop: "10px" }}>
        <Typography variant="h6">Consulta de secciones</Typography>
        <Typography variant="body1">
          Con esta aplicación, puede consultar todas las secciones de su almacén
          con facilidad. Simplemente acceda a la sección de consulta y
          seleccione la sección que desea ver.
        </Typography>
      </Box>
      <Box style={{ marginTop: "10px" }}>
        <Typography variant="h6">Búsqueda</Typography>
        <Typography variant="body1">
          La función de búsqueda le permite encontrar rápidamente lo que está
          buscando en su almacén. Puede buscar por palabras clave o por una
          combinación de criterios.
        </Typography>
      </Box>
      <Box style={{ marginTop: "10px" }}>
        <Typography variant="h6">Tecnologías utilizadas</Typography>
        <Typography variant="body1">
          Esta aplicación está desarrollada con React para el FrontEnd y
          ExpressJS para el BackEnd. Además, utiliza MySQL como base de datos
          para garantizar la seguridad y la eficiencia de sus datos.
        </Typography>
      </Box>
    </div>
  );
};

export default Details;
