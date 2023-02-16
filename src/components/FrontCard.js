import React from "react";

import "./front-card.css";

const FrontCard = ({ value }) => {
  return (
    <div className="front-container">
      <div className="logo">
        <svg
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="18.478" ry="18.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
      </div>
      <p className="card-number">
        {value.cardNumber === "" ? "0000 0000 0000 0000" : value.cardNumber}
      </p>
      <div className="front-bottom">
        <p>{value.name === "" ? "JANE APPLESEED" : value.name}</p>
        <p>
          {value.month === "" ? "00" : value.month}/
          {value.years === "" ? "00" : value.years}
        </p>
      </div>
    </div>
  );
};

export default FrontCard;
