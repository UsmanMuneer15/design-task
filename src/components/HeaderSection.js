import React from "react";
import "./HeaderSection.css";
import img1 from "../assets/images/image.png";
const HeaderSection = () => {
  return (
    <div style={{ height: "500px", backgroundColor: "#1c1c28" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1
              style={{
                color: "white",
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "52px",
              }}
            >
              Find Your
              <br /> Dream Cars
            </h1>
            <p className="mt-5" style={{ color: "white" }}>
              We are provide the luxury car comapny in the <br />
              saudi arabia
            </p>
            <button className="header-btn" style={{ color: "white" }}>
              Contact Us
            </button>
          </div>

          <div className="col-md-6">
            <div className="header-2div">
              <p className="header-form-heading ">
                Find Your Desired Car here{" "}
              </p>
              <input
                className="header-form-input mx-auto"
                type="text"
                placeholder="Search by show room"
              />

              <input
                className="header-form-input mx-auto mt-3"
                type="text"
                placeholder="Search by location "
              />

              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <u>Advanced Search</u>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-success header-btn2">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="img-header mt-5" style={{ color: "white" }}>
        <img className="img-div" src={img1} />
      </h1>
    </div>
  );
};

export default HeaderSection;
