import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#687FE5", color: "#FFFCFB" }}
        className="row"
      >
        <div className="col-7 p-5 mb-5">
          <h5 className="pb-4">Support Portal</h5>
          <p>Search for an answer or browse help topics to create a ticket</p>
          <input
            style={{
              width: "80%",
              height: "2rem",
              fontSize: "0.7rem",
              border: "none",
            }}
            type="text"
            placeholder="Eg:how do i activateF&O, why is my order getting rejected ..."
          />
        </div>
        <div className="col-5 p-5">
          <div className="pb-4 d-flex justify-content-end">
            <a style={{ color: "#FFFCFB" }} href="">
              Track Tickets
            </a>
          </div>
          <p>Featured</p>
          <ol>
            <li className="pb-4">
              <a style={{ color: "#FFFCFB" }} href="">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
            <li>
              <a style={{ color: "#FFFCFB" }} href="">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="row p-5 mx-4 text-muted ">
        <h5 className=" pb-5">To create a ticket, select a relevant topic</h5>
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-solid fa-user-plus px-2 mb-4"></i>Account Opening
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Resident individual
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Minor
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Non Resident Indian (NRI)
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Company, Partnership, HUF and LLP
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Glossary
            </a>
          </p>
        </div>
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-regular fa-user px-2 mb-4"></i>Your Zerodha Account
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Your Profile
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Account modification
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Nomination
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Transfer and conversion of securities
            </a>
          </p>
        </div>
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-solid fa-chart-simple px-2 mb-4"></i> Kite
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              IPO
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Trading FAQs
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Margin Trading Facility (MTF) and Margins
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Charts and orders
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Alerts and Nudges
            </a>
          </p>
        </div>
      </div>
      <div className="row p-5 mx-4 text-muted">
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-solid fa-credit-card px-2 mb-4"></i>Funds
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Add money
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Withdraw money
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Add bank accounts
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              eMandates
            </a>
          </p>
        </div>
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-solid fa-circle-notch px-2 mb-4"></i>Console
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Portfolio
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Corporate actions
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Funds statement
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Reports
            </a>
          </p>
        </div>
        <div className="col-4" style={{ lineHeight: "0.7rem" }}>
          <h6>
            <i className="fa-solid fa-coins px-2 mb-4"></i>Coin
          </h6>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Mutual funds
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              National Pension Scheme (NPS)
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Fixed Deposit (FD)
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Features on Coin
            </a>
          </p>
          <p>
            <a
              style={{
                textDecoration: "none",
                paddingLeft: "1rem",
                fontSize: "0.8rem",
              }}
              href=""
            >
              Payments and Orders
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
