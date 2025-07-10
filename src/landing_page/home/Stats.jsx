import React from "react";

const Stats = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            style={{ width: "100%" }}
            src="media/largestBroker.svg"
            alt="largestBroker"
          />
        </div>
        <div className="col-6 p-5">
          <h2>Largest stock broker in India</h2>
          <p className="mt-4 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
          <div className="row text-muted">
            <div className="col-6">
              <ul>
                <li>Future and option</li>
                <li>Stocks & IPO</li>
                <li>Commodity derivaties</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Currancy derivaties</li>
                <li>Direct mutual funds </li>
                <li>Bonds</li>
              </ul>
            </div>
          </div>
          <img style={{width:"100%"}} src="media/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
