import * as React from "react";

import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Add() {
  const [seccion, setSeccion] = useState("1");
  const [level, setLevel] = useState("A");
  const [existingCategories, setExistingCategories] = useState([
    "Cables",
    "Hardware",
    "Software",
    "Periféricos",
    "Accesorios",
    "Radios",
    "Antenas",
    "Cámaras",
    "Impresoras y piezas",
    "Monitores / Proyectores / Televisores",
    "Otros",
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataForm = {
      section: seccion,
      level: level,
      category: data.get("category"),
      nameModel: data.get("nameModel"),
      unit: data.get("unit"),
      description: data.get("description"),
      id: data.get("id"),
      working: data.get("working"),
    };
    console.log(dataForm);
    verifyData(dataForm);
    //TODO enviar a API
  };

  const verifyData = (dataForm) => {
    //Verificar si los datos no son null, cadenas vacías, cadenas con solo espacios, y números menores a 0
    if (
      dataForm.section !== null &&
      dataForm.level !== null &&
      dataForm.category !== null &&
      dataForm.nameModel !== null &&
      dataForm.unit !== null &&
      dataForm.description !== null &&
      dataForm.id !== null &&
      dataForm.section !== "" &&
      dataForm.level !== "" &&
      dataForm.category !== "" &&
      dataForm.nameModel !== "" &&
      dataForm.unit !== "" &&
      dataForm.description !== "" &&
      dataForm.id !== "" &&
      dataForm.section !== " " &&
      dataForm.level !== " " &&
      dataForm.category !== " " &&
      dataForm.nameModel !== " " &&
      dataForm.unit !== " " &&
      dataForm.description !== " " &&
      dataForm.id !== " " &&
      dataForm.unit > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleChangeSection = (event) => {
    setSeccion(event.target.value);
  };

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline style={{ zIndex: "-999" }} />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "var(--secondary-background-color)" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Añade elemento(s)
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Select
                  labelId="section"
                  id="section-select"
                  value={seccion}
                  onChange={handleChangeSection}
                  fullWidth
                  required
                >
                  <MenuItem value={"1"}>Sección 1</MenuItem>
                  <MenuItem value={"2"}>Sección 2</MenuItem>
                  <MenuItem value={"3"}>Sección 3</MenuItem>
                  <MenuItem value={"4"}>Sección 4</MenuItem>
                  <MenuItem value={"5"}>Sección 5</MenuItem>
                  <MenuItem value={"6"}>Sección 6</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  labelId="level"
                  id="level-select"
                  value={level}
                  onChange={handleChangeLevel}
                  fullWidth
                  required
                >
                  <MenuItem value={"A"}>Nivel A</MenuItem>
                  <MenuItem value={"B"}>Nivel B</MenuItem>
                  <MenuItem value={"C"}>Nivel C</MenuItem>
                  <MenuItem value={"D"}>Nivel D</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  freeSolo
                  disableClearable
                  id="category-textbox"
                  fullWidth
                  required
                  options={existingCategories}
                  renderInput={(params) => (
                    <TextField name="category" {...params} label="Categoría" />
                  )}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  id="nameModel-textBox"
                  label="Nombre y/o Modelo"
                  name="nameModel"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="unit-number"
                  label="Unidades"
                  type="number"
                  name="unit"
                  InputLabelProps={{
                    shrink: true,
                    min: 1,
                  }}
                  onChange={(event) =>
                    event.target.value < 1 || !/^\d+$/.test(event.target.value)
                      ? (event.target.value = 1)
                      : event.target.value
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description-textarea"
                  label="Descripción del objeto"
                  name="description"
                  placeholder="Color, atributo característico etc."
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="id-textBox"
                  label="ID (identificador único)"
                  placeholder="ServiceTag, numero de activo etc."
                  name="id"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  ¿El objeto o componente funciona?
                </Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="working"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                  <FormControlLabel
                    value="null"
                    control={<Radio />}
                    label="Se desconoce"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar Objeto(s)
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
