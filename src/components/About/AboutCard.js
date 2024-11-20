// AboutCard.js

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi Everyone, I'm <span className="purple">Nikhil Faldu</span>, a Full Stack Developer. <br />
            Currently studying Computer Science Engineering at the <span className="purple">Darshan University, Rajkot</span> 
            <br />
            <br />
            I'm dedicated to honing my skills in web development. Alongside, I'm venturing into the fascinating field of <span className="purple">React. js</span> and <span className="purple">Node. js</span> exploring its potential to drive innovation.
            <br /><br />
            My goal is to leverage both my <span className="purple">Full Stack Developer</span> expertise and newfound knowledge in <span className="purple">PHP Developer</span> to create impactful solutions that shape the future of technology.
            <br /><br />Let's collaborate and bring bold ideas to life!
            <br />
          </p>
          <br></br>
          <p style={{ color: "rgb(155 126 172)" }}>
          Simplicity isn’t just a choice; it’s my power move."{" "}
          </p>
          <footer className="blockquote-footer">Nikhil Faldu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
