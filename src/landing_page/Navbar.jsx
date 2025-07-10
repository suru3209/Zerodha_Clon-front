import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg border-bottom bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" style={{ width: "30%" }} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active ms-3" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active ms-3" to="product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active ms-3" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active ms-3" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active ms-3" to="/">
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
