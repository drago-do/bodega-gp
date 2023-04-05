import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useEffect } from "react";

export default function DetallesSeccion({ selectedSeccion }) {
  const [expanded, setExpanded] = React.useState(false);
  const [dataSeccion, setDataSection] = React.useState(null);
  const [dataLevel, setDataLevel] = React.useState(null);
  const [dataCategory, setDataCategory] = React.useState(null);

  const getAllRegisters = () => {
    axios.get(`http://localhost:4000`).then((res) => {
      setDataSection(res.data);
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    // console.log(selectedSeccion === null);
    // console.log(dataSeccion);
    // selectedSeccion !== null ? getDataLevelThisSeccion() : null;
    console.log("selectedSeccion", selectedSeccion);
    dataSeccion === null ? getAllRegisters() : null;
    getDataLevelThisSeccion();
  }, [selectedSeccion]);

  const getDataCategory =() =>{
    if (dataSeccion) {
      //Guarda en un array todas las categorías de la seccion seleccionada
      let categories = [];
      for (const element in dataSeccion) {
        if (dataSeccion[element].seccion === selectedSeccion) {
          categories.push(dataSeccion[element].categoria);
        }
      }
      console.log("All categories", categories);
      //Elimina los valores repetidos del array
      categories = [...new Set(categories)];
      console.log("UnOrder categories", categories);
      //Ordena alfabeticamente los valores del array
      categories.sort();
      console.log("categories", categories);
      setDataCategory(categories);
    }
  }

  const getDataLevelThisSeccion = () => {
    if (dataSeccion) {
      //Guarda en un array todos los niveles de la seccion seleccionada
      let levels = [];
      for (const element in dataSeccion) {
        if (dataSeccion[element].seccion === selectedSeccion) {
          levels.push(dataSeccion[element].nivel);
        }
      }
      console.log("All levels", levels);
      //Elimina los valores repetidos del array
      levels = [...new Set(levels)];
      console.log("UnOrder Levels", levels);
      //Ordena alfabeticamente los valores del array
      levels.sort();
      console.log("levels", levels);
      setDataLevel(levels);
    }
  };

  return (
    <div>
      <h3>Sección {selectedSeccion}</h3>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
