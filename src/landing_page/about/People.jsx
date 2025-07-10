import React from "react";

const People = () => {
  return (
    <div className="container pb-4">
      <div className="row">
        <h2 className="pb-5 mb-5 text-center mx-auto">People</h2>
        <div className="col-6 pb-5 text-center">
          <img
            className="rounded-circle mb-4"
            src="media/nithinKamath.jpg"
            alt="nithinKamath_img"
            style={{ width: "40%" }}
          />
          <h5>Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 pb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="">Homepage</a>  / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
};

export default People;
