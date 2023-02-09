import React from "react";

import "./../css/InfoCard.css";

export default function InfoCard() {
  return (
    <div className="card">
      <h3>Informacion General</h3>
      <div
        className="container-flex-center-space"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div>
          <h4>No. registros:</h4>
          <p>32</p>
        </div>
        <div>
          <h4>No. secciones:</h4>
          <p>8</p>
        </div>
      </div>
      <h4>
        Ultimo registro <span>12/02/2023 14:22</span>
      </h4>
    </div>
  );
}
