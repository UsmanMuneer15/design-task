import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import "./SearchCard.css";
const SearchCard = () => {
  return (
    <div className=" container mt-5">
      <h1 className="search-card-h">Search By Region</h1>
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="card bg-dark text-white">
            <img className="card-img" src={img1} alt="Card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
              <h5 className="card-title">Al-Jauf</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark text-white">
            <img className="card-img" src={img1} alt="Card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
              <h5 className="card-title">Tabuk</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark text-white">
            <img className="card-img" src={img1} alt="Card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
              <h5 className="card-title">Northern Borders</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark text-white">
            <img className="card-img" src={img1} alt="Card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
              <h5 className="card-title">Hail</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 Search-card-div">
        <button
          className="btn search-card-btn"
          style={{ width: "10%", height: "40px", border: "1px solid black" }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
