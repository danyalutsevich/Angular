import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button type="button" className="btn btn-info" onClick={goBack}>
      Back
    </button>
  );
}

export default BackButton;
