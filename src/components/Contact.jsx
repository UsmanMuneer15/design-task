import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main-div mt-5">
      <div className="mt-5">
        <h1
          className="heading-contact"
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "52px",
          }}
        >
          Contact Information
        </h1>
      </div>
      <p className="heading-contact">
        Plan About Yet way get cold Spot its Weak. Almostdo am and limit heats
        <br />
        Resolve Parties but why she reviewing
      </p>

      <div className="container">
        <div className="row " style={{ padding: "50px" }}>
          <div className="col-md-4 contact-text">
            <strong>HotLine</strong> <br /> +7928923892
          </div>
          <div className="col-md-4 contact-text">
            <strong>Our Location</strong> <br />
            55 Main Street, The Grand Avenue 2nd Block,
            <br />
            New York
          </div>
          <div className="col-md-4 contact-text">
            <strong> Official Email</strong> <br />
            info@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
