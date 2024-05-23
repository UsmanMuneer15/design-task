import React from "react";
import img3 from "../assets/images/3.jpg";

const Curosal = () => {
  return (
    <div>
      <div className="container mt-5 position-relative">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",

            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "52px",
          }}
        >
          Search By Brand
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          We have thousands of car we have the just right one of you
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="row w-100 mx-0">
            <div className="col-md-3 position-relative">
              <button
                className="btn btn-primary rounded-circle position-absolute "
                style={{
                  top: "50%",
                  left: "-20px",
                  width: "40px",
                  height: "40px",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  border: "none",
                  backgroundColor: "orange",
                }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only"></span>
              </button>
              <div className="card">
                <img className="card-img-top" src={img3} alt="Image 1" />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <div className="card">
                <img className="card-img-top" src={img3} alt="Image 2" />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <div className="card">
                <img className="card-img-top" src={img3} alt="Image 3" />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <button
                className="btn btn-primary rounded-circle position-absolute "
                style={{
                  top: "50%",
                  right: "-20px",
                  width: "40px",
                  height: "40px",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  border: "none",
                  backgroundColor: "orange",
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only"></span>
              </button>
              <div className="card">
                <img className="card-img-top" src={img3} alt="Image 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn"
          style={{ width: "10%", height: "40px", border: "none" }}
        >
          View More --
        </button>
      </div>
    </div>
  );
};

export default Curosal;
