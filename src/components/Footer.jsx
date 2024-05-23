import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-xl-3 mx-auto mt-3">
              <h5
                className="text-uppercase mb-4 font-weight-bold "
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "52px",
                }}
              >
                MAARDCOM
              </h5>
              <p>
                Here is the peragraph for the description lerm ipsum doller for
                that
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold ">
                Quick Links
              </h5>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  -Teams
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Careers
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Investors
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Partners
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold ">
                Products
              </h5>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Used Cars
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  News Cars
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Showroom
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Dealsers
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold ">
                Resources
              </h5>
              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Blogs
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  FAQs
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Contact Us
                </a>
              </p>

              <p>
                <a className="text-white" style={{ textDecoration: "none" }}>
                  Teams
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold ">
                Company Name
              </h5>
              <p>
                <button className="btn btn-secondary">icon | ok</button>
              </p>
              <p>
                <button
                  className="btn btn-secondary"
                  style={{ backgroundColor: "#880ed3", color: "white" }}
                >
                  icon | ok
                </button>
              </p>

              <p>
                <button className="btn btn-secondary">icon | ok</button>
              </p>
            </div>
          </div>
          <hr />
          <h5>@2024-Maardcom</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
