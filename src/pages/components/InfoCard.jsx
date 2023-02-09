import React from "react";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";

import "./../css/InfoCard.css";

export default function InfoCard() {
  return (
    <div className="card">
      <h3>Informacion General</h3>
      <div className="container-flex-center-space info-section-card">
        <div className="info-section-text-card">
          <AppRegistrationIcon />
          <h4>No. registros:</h4>
          <p>32</p>
        </div>
        <div className="info-section-text-card">
          <BlindsClosedIcon />
          <h4>No. secciones:</h4>
          <p>12</p>
        </div>
      </div>
      <h4>
        Ultimo registro <span>12/02/2023 14:22</span>
      </h4>
    </div>
  );
}
