import React from "react";
import { Row, Col } from "react-bootstrap";
import { MdSchool, MdWork, MdRocketLaunch } from "react-icons/md";

const milestones = [
  {
    period: "Aug 2021 – Jun 2025",
    title: "Darshan University, Rajkot",
    role: "B.Tech Computer Science & Engineering",
    desc: "Passout",
    icon: <MdSchool />,
    color: "#c770f0",
  },
  {
    period: "Aug 2023 – Sep 2024",
    title: "T Square Solution LLP",
    role: "PHP & React Native Developer",
    desc: "Trainee",
    icon: <MdWork />,
    color: "#be6adf",
  },
  {
    period: "Feb 2025 – Aug 2025",
    title: "Uest EdTech Pvt. Ltd.",
    role: "Full Stack Software Developer",
    desc: "Full Time",
    icon: <MdWork />,
    color: "#c770f0",
  },
  {
    period: "Sep 2025 – Present",
    title: "The Eclipso Infoweb LLP",
    role: "Senior Full Stack Software Developer",
    desc: "Full Time",
    icon: <MdWork />,
    color: "#c770f0",
  },
  {
    period: "Aug 2025 – Present",
    title: "Trividhya Innovation Pvt. Ltd.",
    role: "Founder & Director",
    icon: <MdRocketLaunch />,
    color: "#c770f0",
    isLast: true,
  },
];

function Milestone() {
  const total = milestones.length;

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
        My <strong className="purple">Journey</strong>
      </h1>

      <Row className="justify-content-center">
        <Col lg={10} md={12}>
          <div className="vt-timeline">
            <div className="vt-line"></div>
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;
              // Progress: 0 = first (dim), 1 = last (full glow)
              const progress = index / (total - 1);
              const opacity = 0.5 + progress * 0.5;
              const glowSize = Math.round(progress * 25);
              const dotGlow = Math.round(8 + progress * 25);

              return (
                <div
                  className={`vt-item ${isLeft ? "vt-left" : "vt-right"} ${item.isLast ? "vt-last" : ""}`}
                  key={index}
                  style={{ opacity }}
                >
                  <div
                    className="vt-dot"
                    style={{
                      background: `radial-gradient(circle, ${item.color}, ${item.color}bb)`,
                      boxShadow: `0 0 ${dotGlow}px ${item.color}70, 0 0 ${dotGlow * 2}px ${item.color}30`,
                    }}
                  >
                    <span className="vt-dot-icon">{item.icon}</span>
                  </div>

                  <div
                    className={`vt-card ${item.isLast ? "vt-card-glow" : ""}`}
                    style={{
                      borderTopColor: item.color,
                      boxShadow: item.isLast
                        ? undefined
                        : `0 ${4 + glowSize * 0.4}px ${15 + glowSize}px rgba(199, 112, 240, ${0.05 + progress * 0.15})`,
                    }}
                  >
                    <span className="vt-period" style={{ color: item.color }}>{item.period}</span>
                    <h4 className="vt-title">{item.title}</h4>
                    <span className="vt-role">{item.role}</span>
                    {item.desc && <span className="vt-desc">{item.desc}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Milestone;
