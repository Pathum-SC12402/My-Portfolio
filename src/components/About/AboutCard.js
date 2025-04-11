import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Pathum Dilshan</span>  
          from <span className="purple">Kalutara, Sri Lanka.</span>
          <br />
          I am currently pursuing a Bachelor's degree in Computer Science at the University of Ruhuna.
          <br />
          I’m a passionate full-stack developer with a strong interest in backend development, DevOps, and exploring AI and machine learning.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating New Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source Contributions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Building solutions that matter, one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Pathum Dilshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
