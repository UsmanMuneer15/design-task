import React from "react";
import "./Section2.css";
import img3 from "../assets/images/image.png";
const Section2 = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-6 mx-auto section2-div">
            <div className="row setion2-input">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Your Manufacturing</label>
                  <select className="form-control">
                    <option>2021</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Make</label>
                  <select className="form-control">
                    <option>Audi</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row setion2-input">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Option 1</label>
                  <select className="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Moved</label>
                  <select className="form-control">
                    <option>10000</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row setion2-input">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Engine</label>
                  <select className="form-control">
                    <option>Okkk</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Option 1</label>
                  <select className="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
            </div>
            <h5 className="pricing">Pricing(usd)</h5>

            <div className="row setion2-input">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Option 1</label>
                  <select className="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Select Option 1</label>
                  <select className="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5 section2-btn">
              Submit
            </button>
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="h-section2">Know Your Buying Power</h1>
            <p>
              How Much You Can Afford ?Find These whitch Vehicle Match Your{" "}
              <br />
              Budget
            </p>

            <img className="img-secion2" src={img3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
