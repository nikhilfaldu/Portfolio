import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const plans = [
  {
    name: "Hourly Plan",
    desc: "Best for quick fixes, experiments or \"can you just...\" tasks.",
    price: "$7",
    period: "/Per Hour",
    hours: null,
    features: [
      "Dedicated developer on hourly basis",
      "Daily progress reports",
      "Time-tracked work logs",
      "40+ hours availability per week",
      "Pay only for actual hours worked",
      "Flexible scaling up or down",
    ],
    popular: false,
  },
  {
    name: "Part-Time Plan",
    desc: "Perfect for startups that need momentum with part-time commitment.",
    price: "$500",
    period: "/Per Month",
    hours: "4 hours/day – 20 hours/week – 80 hours/month",
    features: [
      "Dedicated part-time resource",
      "Weekly progress reports",
      "Time-tracked data transparency",
      "Agile task management support",
      "Consistent weekly delivery",
      "Easy communication & collaboration",
    ],
    popular: true,
  },
  {
    name: "Full-Time Plan",
    desc: "For clients that want speed & ownership and zero babysitting.",
    price: "$1000",
    period: "/Per Month",
    hours: "8 hours/day – 40 hours/week – 160 hours/month",
    features: [
      "Dedicated full-time developer",
      "Daily progress reports",
      "Time-tracked work transparency",
      "Priority task execution",
      "Deep project involvement",
      "Long-term scalability support",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <Container fluid style={{ paddingTop: "30px", paddingBottom: "40px", overflow: "hidden" }}>
      <Container>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Flexible <strong className="purple">Pricing</strong>
      </h1>
      <p style={{ textAlign: "center", color: "#b0a8c0", marginBottom: "40px" }}>
        Transparent pricing tailored to your project needs
      </p>
      <Row style={{ justifyContent: "center" }}>
        {plans.map((plan, index) => (
          <Col lg={4} md={6} sm={12} key={index} style={{ padding: "10px" }}>
            <div className={`pricing-card ${plan.popular ? "pricing-popular" : ""}`}>
              {plan.popular && <span className="pricing-badge">POPULAR</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              {plan.hours && <p className="pricing-hours">{plan.hours}</p>}
              <div className="pricing-divider"></div>
              <h4 className="pricing-features-title">What you get</h4>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="pricing-check">◉</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/918347322743?text=Hello%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noreferrer"
                className={`pricing-btn ${plan.popular ? "pricing-btn-popular" : ""}`}
              >
                Get Started
              </a>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </Container>
  );
}

export default Pricing;
