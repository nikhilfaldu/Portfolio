import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Companies from "./Companies";
import Pricing from "../About/Pricing";
import FindMe from "./FindMe";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: "20px" }}>
                I'M
                <strong className="main-name">  Nikhil Faldu</strong>
              </h1>

              <div className="founder-title">
                <span className="founder-dot" style={{ marginTop: "6px" }}></span>
                <span className="founder-line">
                  <span className="purple-text">Founder & Director @ Trividhya Innovation Pvt. Ltd.</span>
                  <span className="purple-text" style={{ fontSize: "0.85em", opacity: 0.85 }}>Delivering Innovative IT Solutions</span>
                </span>
              </div>

              <div style={{ padding: 50, paddingTop: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Companies />
      <Pricing />
      <FindMe />
    </section>
  );
}

export default Home;
