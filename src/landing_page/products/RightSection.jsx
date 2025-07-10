import React from "react";

const RightSection = ({ img, heading, description }) => {
  return (
    <div className="container">
      <div className="row px-5">
        <div className="col-5 pt-5 mt-5">
          <h3 className="pt-5">Console</h3>
          <p>
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <p>
            Learn more<i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="col-7">
          <img style={{ width: "100%" }} src={img} alt="largestBroker" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
