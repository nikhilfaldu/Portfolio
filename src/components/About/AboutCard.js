// AboutCard.js

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "0.95em" }}>
            👋 Hi Everyone, I'm <span className="purple">Nikhil Faldu</span> — a{" "}
            <span className="purple">Full Stack Software Developer</span>.
            <br /><br />
            Currently, I'm the <span className="purple">Founder & Director</span> of{" "}
            <span className="purple">Trividhya Innovation Pvt. Ltd.</span> and also working as a{" "}
            <span className="purple">Senior Full Stack Developer</span> at{" "}
            <span className="purple">Eclipso Infoweb LLP</span>.
            <br /><br />
            Trividhya has been growing with strong marketing presence and we're preparing ourselves for the{" "}
            <span className="purple">AI-driven digital future</span>. Our main focus is helping{" "}
            <span className="purple">small businesses</span> transition into the digital world through smart strategies and innovative solutions.
            <br /><br />
            We build <span className="purple">complex & advanced innovation systems</span> and leverage{" "}
            <span className="purple">AI & ML</span> to boost our projects — because intelligent solutions are the future.
            <br /><br />
            Our core motivation at Trividhya is becoming experts in{" "}
            <span className="purple">AI & custom software</span>, using that knowledge to create impactful, useful software for the market.
          </p>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Simplicity isn't just a choice; it's my power move."
          </p>
          <footer className="blockquote-footer">Nikhil Faldu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
