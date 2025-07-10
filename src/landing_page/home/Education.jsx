import React from "react";

const Education = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            style={{ width: "100%" }}
            src="media/education.svg"
            alt="largestBroker"
          />
        </div>
        <div className="col-6 p-5">
          <h3>Free and open market education</h3>
          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity<i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
