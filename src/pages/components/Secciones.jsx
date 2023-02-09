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
        <div id="A" className="one" onClick={handleClickSection}>
          A
        </div>
        <div id="B" className="two" onClick={handleClickSection}>
          B
        </div>
        <div id="C" className="three" onClick={handleClickSection}>
          C
        </div>
        <div id="D" className="four" onClick={handleClickSection}>
          D
        </div>
        <div id="E" className="five" onClick={handleClickSection}>
          E
        </div>
        <div id="F" className="six" onClick={handleClickSection}>
          F
        </div>
        <div id="G" className="seven" onClick={handleClickSection}>
          G
        </div>
        <div id="H" className="eight" onClick={handleClickSection}>
          H
        </div>
        <div id="I" className="nine" onClick={handleClickSection}>
          I
        </div>
        <div id="J" className="ten" onClick={handleClickSection}>
          J
        </div>
        <div id="K" className="eleven" onClick={handleClickSection}>
          K
        </div>
        <div id="L" className="twelve" onClick={handleClickSection}>
          L
        </div>
      </div>
      <div>
        <DetallesSeccion selectedSeccion={cardSelected} />
      </div>
    </div>
  );
}
