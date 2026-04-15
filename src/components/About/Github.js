// Github.js

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="nikhilfaldu"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          dark: ["#1a1035", "#4a1e6e", "#7b2d8e", "#a855f7", "#c084f5"],
        }}
      />
    </Row>
  );
}

export default Github;
