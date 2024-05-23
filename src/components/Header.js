import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark  h-100"
        style={{ backgroundColor: "#1c1c28" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Logo</a>
          <a className="navbar-brand">New car</a>
          <a className="navbar-brand">Used car</a>
          <a className="navbar-brand">Cell your Car</a>
          <a className="navbar-brand">Buy car</a>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  style={{
                    color: "white",
                    backgroundColor: "#880ed3",
                    borderRadius: "8px",
                  }}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
