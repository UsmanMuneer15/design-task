import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <buuton className="btn form-btn ">Have A question</buuton>
      </div>
      <div className="p-5 d-flex justify-content-center">
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "52px",
          }}
        >
          Send Us A Message
        </h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <input
                className="form-control form-input"
                placeholder="Enter email"
              />
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control form-input"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control form-input"
                    placeholder="Enter email"
                  />
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea
                placeholder="Tell Us Your Project"
                className="form-control form-input"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>

            <button type="submit" className="btn mt-3 formm-btn">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
