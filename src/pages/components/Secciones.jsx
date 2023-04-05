import React, { useEffect, useState } from "react";

import DetallesSeccion from "./DetallesSeccion";

import "./../css/Secciones.css";

export default function Secciones() {
  const [cardSelected, setCardSelected] = useState("");

  const handleClickSection = (e) => {
    setCardSelected(e.target.id);
  };
  return (
    <div className="card no-seleccionable">
      <h3>Secciones de la bodega</h3>
      <p>
        Selecciona una sección para ver mas informacion y los elementos que esta
        tiene.
      </p>
      <div className="wrapper">
        <div id="1" className="one" onClick={handleClickSection}>
          Seccion 1
        </div>
        <div id="2" className="two" onClick={handleClickSection}>
          Seccion 2
        </div>
        <div id="3" className="three" onClick={handleClickSection}>
          Seccion 3
        </div>
        <div id="4" className="four" onClick={handleClickSection}>
          Seccion 4
        </div>
        <div id="5" className="five" onClick={handleClickSection}>
          Seccion 5
        </div>
        <div id="6" className="six" onClick={handleClickSection}>
          Seccion 6
        </div>
        <div id="7" className="seven" onClick={handleClickSection}>
          Seccion 7
        </div>
        <div id="8" className="eight" onClick={handleClickSection}>
          Seccion 8
        </div>
        <div id="9" className="nine" onClick={handleClickSection}>
          Seccion 9
        </div>
        <div id="10" className="ten" onClick={handleClickSection}>
          Seccion 10
        </div>
        <div id="11" className="eleven" onClick={handleClickSection}>
          Seccion 11
        </div>
        <div id="12" className="twelve" onClick={handleClickSection}>
          Seccion 12
        </div>
      </div>
      <div>
        <DetallesSeccion selectedSeccion={cardSelected} />
      </div>
    </div>
  );
}
