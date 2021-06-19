import React from 'react';
import { Link } from 'react-router-dom';

function CarData() {
  return (
    <div>
      Datos del auto
      <Link to="/steps/plans">Siguiente</Link>
    </div>
  );
}

export default CarData;
