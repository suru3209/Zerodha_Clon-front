import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center p-5 m-5 text-muted">
        <h2>Charges</h2>
        <p>List of all charges and taxes</p>
      </div>
      <div className="row p-3">
        <div className="col-4 p-2 text-center">
          <img src="media/pricing0.svg" alt="zero" />
          <h4>Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/intradayTrades.svg" alt="2zero" />
          <h4>Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/pricingMF.svg" alt="3zero" />
          <h4>Free direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
