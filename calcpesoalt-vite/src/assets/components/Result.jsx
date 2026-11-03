import React from "react";

function Result({ dados }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Resultados</h2>
      <p>Altura estimada: {dados.altura} cm</p>
      <p>Peso estimado: {dados.peso} kg</p>
    </div>
  );
}

export default Result;
