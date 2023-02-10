import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";

const Features = () => {
  return (
    <>
      <div style={{ padding: "25px" }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Características destacadas
        </Typography>
        <Grid container justify="center">
          <Chip
            label="Consulta de secciones"
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
          <Chip
            label="Búsqueda"
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
          <Chip
            label="React"
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
          <Chip
            label="ExpressJS"
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
          <Chip
            label="MySQL"
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
        </Grid>
      </div>
      <div style={{ padding: "25px" }}>
        {/* Apartado de desarrolladores y contacto */}
        
      </div>
    </>
  );
};

export default Features;
