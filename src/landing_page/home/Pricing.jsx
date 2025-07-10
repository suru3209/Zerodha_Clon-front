import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4 p-3">
          <h3 className="mb-3">Unbeatable pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 p-4 border">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p>Free account opening</p>
            </div>
            <div className="col-6 p-4 border">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
