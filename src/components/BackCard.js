import React from "react";
import "./back-card.css";

const BackCard = ({ value }) => {
  return (
    <div className="back-container">
      <p className="cvc">{value.cvc === "" ? "000" : value.cvc}</p>
    </div>
  );
};

export default BackCard;
