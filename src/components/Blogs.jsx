import React from "react";
import img1 from "../assets/images/1.jpg";
const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="card bg-dark text-white">
              <img className="card-img" src={img1} alt="Card image" />
              <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                <h5
                  className="card-title"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  New Car Listening Updates
                </h5>
                <p className="card-title">
                  {" "}
                  Seeing yours cars here we have most advanced cars that you
                  have find
                </p>

                <a style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Contiue Reading --
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <div className="row">
              <div className="col-md-6 ">
                <img style={{ width: "300px", height: "350px" }} src={img1} />
                <p>Md Shock 20202</p>
                <h1
                  className="mt-5"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Saudi arabia Industry news
                </h1>
                <a style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Contiue Reading --
                </a>
              </div>
              <div className="col-md-6">
                <img style={{ width: "300px", height: "350px" }} src={img1} />
                <p>Md Shock 20202</p>
                <h1
                  className="mt-5"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Car maintanens and guiding news
                </h1>
                <a style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Contiue Reading --
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
