import React from "react";
import img2 from "../assets/images/2.jpg";
const MeetTeams = () => {
  return (
    <>
      <h1
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",

          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "52px",
        }}
      >
        Meet Our Team!
      </h1>
     
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img className="card-img" src={img2} alt="Card image" />
            </div>
            <div className="text-center mt-2">
              <h5 className="card-title">
                <strong>Usman Muneer</strong>
                <br />
                <h6 style={{ fontSize: "13px" }}>Prasedent of sales</h6>
              </h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img className="card-img" src={img2} alt="Card image" />
            </div>
            <div className="text-center mt-2">
              <h5 className="card-title">
                <strong>Usman Ali</strong>
                <br />
                <h6 style={{ fontSize: "13px" }}>Content Writer</h6>
              </h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img className="card-img" src={img2} alt="Card image" />
            </div>
            <div className="text-center mt-2">
              <h5 className="card-title">
                <strong>Abdullah</strong>
                <br />
                <h6 style={{ fontSize: "13px" }}>Web Developer</h6>
              </h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img className="card-img" src={img2} alt="Card image" />
            </div>
            <div className="text-center mt-2">
              <h5 className="card-title">
                <strong>Usman Muneer</strong>
                <br />
                <h6 style={{ fontSize: "13px" }}>Prasedent of sales</h6>
              </h5>
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
            style={{ width: "10%", height: "40px", border: "1px solid black" }}
          >
            Join Our Team
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetTeams;
