import React from "react";
import { useParams } from "react-router-dom";

function PaintingDetails() {
  const { id } = useParams();
  // здесь мы можем использовать идентификатор картины для получения дополнительной информации из базы данных
  return (
    <div>
      <h1>Painting Details</h1>
      <p>Details of the painting with id {id}</p>
    </div>
  );
}

export default PaintingDetails;
