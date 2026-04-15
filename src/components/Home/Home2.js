import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-photoes.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "0px" }}>
            <h1 style={{ fontSize: "2.6em", color: "white" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description" style={{ paddingTop: "0px" }}>
            <p className="home-about-body">
              🚀 <b className="purple">Founder & Director</b> with <b className="purple">3+ years</b> of experience delivering innovative IT solutions.
              <br /><br />
              💻 Skilled in <b className="purple">Full Stack Development</b>, building fast, scalable, and modern applications.
              <br /><br />
              🏗️ Develop custom business systems like <b className="purple">ERP</b>, <b className="purple">CRM</b>, and <b className="purple">LMS</b> for real-world use.
              <br /><br />
              🤖 Integrate <b className="purple">AI features</b> and automation to create smart digital products.
              <br /><br />
              🔄 Provide end-to-end services from idea to deployment and long-term support.
              <br /><br />
              🎨 Focus on <b className="purple">UI/UX</b>, <b className="purple">Cybersecurity</b>, and performance to build impactful solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid profile-round" alt="avatar" draggable="false" onContextMenu={(e) => e.preventDefault()} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
