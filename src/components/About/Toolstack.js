import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglecloud,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiCloudflare,
  SiSocketdotio,
  SiRazorpay,
  SiTwilio,
  SiGooglegemini,
  SiVercel,
  SiRender,
  SiPlesk,
  SiCpanel,
} from "react-icons/si";
import { FaGithub, FaAws, FaRobot, FaPaintBrush } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoIonic } from "react-icons/io";
import { AiOutlineRobot } from "react-icons/ai";
import { BsCursorFill, BsRobot, BsWind, BsCloudFill } from "react-icons/bs";
import { TbBrandOpenai } from "react-icons/tb";

const tools = [
  { icon: <VscVscode />, name: "VS Code" },
  { icon: <BsCursorFill />, name: "Cursor" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <FaPaintBrush />, name: "Adobe" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiCloudflare />, name: "Cloudflare" },
  { icon: <TbBrandOpenai />, name: "ChatGPT" },
  { icon: <AiOutlineRobot />, name: "Claude AI" },
  { icon: <BsRobot />, name: "DeepSeek AI" },
  { icon: <SiGooglegemini />, name: "Gemini AI" },
  { icon: <FaRobot />, name: "Ollama AI" },
  { icon: <FaRobot />, name: "Lovable AI" },
  { icon: <SiRazorpay />, name: "Razorpay" },
  { icon: <SiTwilio />, name: "Twilio" },
  { icon: <SiSocketdotio />, name: "Socket.io" },
  { icon: <IoLogoIonic />, name: "IoT" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiPlesk />, name: "Plesk" },
  { icon: <SiCpanel />, name: "cPanel" },
  { icon: <BsCloudFill />, name: "Cloud Panel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <span className="tech-icon-name">{tool.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
