import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGooglecloud,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io"; // IoT icon

// Round ChatGPT icon
import { AiOutlineRobot } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineRobot /> {/* Round ChatGPT Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoIonic /> {/* IoT Icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
