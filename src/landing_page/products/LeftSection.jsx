import React from "react";

const LeftSection = ({
  kitePng,
  headingKite,
  description,
  appleStore,
  googlePlayStore,
}) => {
  return (
    <div className="container m-5">
      <div className="row px-5">
        <div className="col-7">
          <img style={{ width: "100%" }} src={kitePng} alt="largestBroker" />
        </div>
        <div className="col-5 p-5">
          <h3 className="pt-4">{headingKite}</h3>
          <p className="mt-4 text-muted">{description}</p>
          <div className="row">
            <div className="col-6">
              <a
                href="https://www.youtube.com/"
                style={{ textDecoration: "none", whiteSpace: " wrap" }}
              >
                Try demo <i className="fa-solid fa-arrow-right"></i>
                <img src={appleStore} alt="appleStoreSvg" />
              </a>
            </div>
            <div className="col-6">
              <a href="" style={{ textDecoration: "none" }}>
                Learn more <i className="fa-solid fa-arrow-right"></i>
                <img src={googlePlayStore} alt="googlePlayStoreSvg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
