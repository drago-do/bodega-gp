import React from "react";

import InfoCard from "./components/InfoCard";
import Secciones from "./components/Secciones";

export default function bodega() {
  return (
    <div className="container-flex-column-center-start">
      <InfoCard />
      <Secciones />
    </div>
  );
}
