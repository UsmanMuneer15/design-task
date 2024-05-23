import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import "./Home.css";
import Card from "react-bootstrap/Card";
import pic3 from "../assets/images/pic3.png";
import pic2 from "../assets/images/pic2.png";
import pic0 from "../assets/images/pic1.png";

function Home() {
  return (
    <div className="bg-3 mt-5">
      <div className="mt-3 text-center justify-content-center mb-3 ">
        <button className="testmoniel ">Testmonials</button>
      </div>
      <div className="mt-4 mb-3">
        <h1 className="h1">What People Are Saying</h1>
      </div>
      <div className="d-flex flex-row gap-3 justify-content-center">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <div className="d-flex flex-row gap-3">
                <Image src={pic2}></Image>
                <Card.Subtitle className="mt-4 text-muted">
                  Dean D.{" "}
                  <span
                    className="text-[#880ED3]
"
                  >
                    Director
                  </span>
                </Card.Subtitle>
              </div>
              <Card.Text className="mt-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <div className="d-flex flex-row gap-3">
                <Image src={pic3}></Image>
                <Card.Subtitle className="mt-4 text-muted">
                  Cristian L.{" "}
                  <span
                    className="text-[#880ED3]
"
                  >
                    Director
                  </span>
                </Card.Subtitle>
              </div>
              <Card.Text className="mt-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <div className="d-flex flex-row gap-3">
                <Image src={pic0}></Image>
                <Card.Subtitle className="mt-4 text-muted">
                  Leonel R.{" "}
                  <span
                    className="text-[#880ED3]
"
                  >
                    Assistent
                  </span>
                </Card.Subtitle>
              </div>
              <Card.Text className="mt-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
