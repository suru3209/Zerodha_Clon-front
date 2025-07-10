import React from "react";

const Awards = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div
          className="col-5 p-5"
          style={{ fontSize: "1rem", opacity: "0.8", lineHeight: "1.4rem" }}
        >
          <h3 className="mb-4">Trust with confidence</h3>
          <div>
            <h6>Customer-first always</h6>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div>
            <h6>No spam or gimmicks</h6>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a style={{ textDecoration: "none" }} href="">
                Our philosophies
              </a>
              .
            </p>
          </div>
          <div>
            <h6>The Zerodha universe</h6>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h6>Do better with money</h6>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7">
          <img
            className="p-5 mt-5"
            src="media/ecosystem.png"
            alt="ecosystem"
            style={{ width: "92%" }}
          />
          <div className="text-center">
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: ".8rem",
                opacity: "0.9",
              }}
            >
              Explore our products<i className="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: ".8rem",
                opacity: "0.9",
              }}
            >
              Try Kite demo<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          src="media/pressLogos.png"
          alt="pressLogo"
          className="mb-5"
          style={{ width: "60%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Awards;
