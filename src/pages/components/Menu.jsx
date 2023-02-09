import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoIcon from "@mui/icons-material/Info";
import "./../css/Menu.css";
import { Login } from "@mui/icons-material";
import { color } from "@mui/system";

export default function Menu({ activo }) {
  const [posición, setPosición] = useState("-100vw");

  const handleMenu = () => {
    //Si el valor de posición es "-100vw" lo cambia a "0" y viceversa
    setPosición(posición === "-100vw" ? "0" : "-100vw");
  };

  useEffect(() => {
    //Si activo === true cierra el menu
    if (activo) {
      setPosición("0");
    } else {
      setPosición("-100vw");
    }
  }, [activo]);

  return (
    <div className="menu-list no-seleccionable" style={{ left: posición }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Link to={"/admin/bodega"} onClick={handleMenu}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <StackedLineChartIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Información general"
              secondary="Resumen sobre inventario"
            />
          </ListItem>
        </Link>
        <Link to={"/admin/add"} onClick={handleMenu}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PostAddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Añadir"
              secondary="Añade un objeto o categoría."
            />
          </ListItem>
        </Link>
        <Link to={"/info"} onClick={handleMenu}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InfoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Información"
              secondary="Información de la app"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
