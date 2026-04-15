import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import trividhyaLogo from "../../Assets/trividhya-icon.png";
import {
  AiOutlineCode,
  AiOutlineAppstore,
} from "react-icons/ai";
import {
  MdOutlineDevices,
  MdOutlineBrush,
} from "react-icons/md";
import { IoGameControllerOutline, IoRocketOutline } from "react-icons/io5";

const highlights = [
  { icon: <AiOutlineCode />, text: "Custom Software & Web Apps" },
  { icon: <MdOutlineDevices />, text: "IoT & Smart Systems" },
  { icon: <IoGameControllerOutline />, text: "Game Development" },
  { icon: <MdOutlineBrush />, text: "Graphics & Branding" },
  { icon: <IoRocketOutline />, text: "Strategic Ventures" },
  { icon: <AiOutlineAppstore />, text: "School ERP & Smart CRM" },
];

function Companies() {
  return (
    <Container fluid className="companies-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} style={{ textAlign: "center", marginBottom: "10px" }}>
            <h1 style={{ fontSize: "2.6em", color: "white" }}>
              MY <span className="purple"> COMPANY </span>
            </h1>
            <p style={{ color: "#b0a8c0", fontSize: "1.1em" }}>
              Where I build innovative digital solutions
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          {/* Left — Logo */}
          <Col md={4} className="company-logo-col">
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12}>
              <div className="company-logo-wrapper">
                <img
                  src={trividhyaLogo}
                  alt="Trividhya Innovation"
                  className="company-logo-img"
                  draggable="false"
                />
              </div>
            </Tilt>
          </Col>

          {/* Right — Info Points */}
          <Col md={7} className="company-info-col">
            <h2 className="company-name">
              Trividhya Innovation <span className="purple">Pvt. Ltd.</span>
            </h2>
            <p className="company-tagline">
              Delivering Innovative IT Solutions Worldwide
            </p>

            <div className="company-highlights">
              {highlights.map((item, i) => (
                <div className="company-highlight-item" key={i}>
                  <span className="company-highlight-icon">{item.icon}</span>
                  <span className="company-highlight-text">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://trividhya.com"
              target="_blank"
              rel="noreferrer"
              className="company-visit-btn"
            >
              Visit Website <span>→</span>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Companies;
