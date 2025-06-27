import React from "react";

const Stage = ({ stageText = "Stage Text", className = "stage--primary" }) => {
  return (
    <>
      <span className={`stage ${className}`}>{stageText}</span>
    </>
  );
};

export default Stage;
