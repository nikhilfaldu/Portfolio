import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiPhp,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiVuedotjs,
  SiVite,
  SiUnity,
  SiCplusplus,
  SiPrisma,
  SiExpress,
  SiDotnet,
  SiOdoo,
  SiUnrealengine,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { MdSecurity, MdSmartToy } from "react-icons/md";
import { BsCloudFill, BsDatabase } from "react-icons/bs";

const skills = [
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiVuedotjs />, name: "Vue.js" },
  { icon: <DiAngularSimple />, name: "Angular" },
  { icon: <SiVite />, name: "Vite.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiPhp />, name: "PHP" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <DiJava />, name: "Java" },
  { icon: <SiDotnet />, name: ".NET" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiUnity />, name: "Unity" },
  { icon: <SiOdoo />, name: "Odoo" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <BsDatabase />, name: "DynamoDB" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <VscAzure />, name: "Azure" },
  { icon: <BsCloudFill />, name: "Cloud" },
  { icon: <SiUnrealengine />, name: "Unreal Engine" },
  { icon: <MdSmartToy />, name: "AI Agent" },
  { icon: <MdSecurity />, name: "Cybersecurity" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {skill.icon}
          <span className="tech-icon-name">{skill.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
