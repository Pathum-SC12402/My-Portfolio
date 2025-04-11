import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TaskTracker from "../../Assets/Projects/TaskTracker.png";
import PCWorld from "../../Assets/Projects/PCWorld.png";
import EleFlex from "../../Assets/Projects/EleFlex.png";
import SMEConnect from "../../Assets/Projects/SME.png";
import PrimeLand from "../../Assets/Projects/PrimeLand.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SMEConnect}
              isBlog={false}
              title="SMEConnect"
              description="A scalable web platform built using React, TypeScript, Spring Boot (Microservice Architecture), and PostgreSQL to empower small and medium enterprises. Designed for efficient resource and project management, the application integrates Tailwind CSS for UI, Figma for design collaboration, and leverages GitHub Actions for CI/CD workflows in a DevOps environment."
              ghLink="https://github.com/CraftedTechHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ruhunix"
              description="A collaborative freelancing platform designed for university students to connect, showcase their skills, and work on real-world projects for income. Built with React, Node.js, Express.js, and MongoDB, the app features a clean UI designed in Figma, organized via Trello, and tested using Postman. GitHub is used for version control and team collaboration."
              ghLink="https://github.com/CSB-DEVELOPMENTS"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EleFlex}
              isBlog={false}
              title="EleFlex"
              description="A desktop-based Elephant Management System developed using Java Swing and MySQL to support conservation efforts. The application helps conservationists, wildlife managers, and volunteers efficiently track elephant populations, ensure their protection, and manage welfare activities. Version control and collaboration were handled via GitHub."
              ghLink="https://github.com/Pathum-SC12402/Java-Desktop-Application"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskTracker}
              isBlog={false}
              title="Task Tracker"
              description="A full-stack task tracking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with CSS. Designed using Figma and deployed with GitHub Actions, the app features secure user authentication, dynamic task updates, and efficient tracking of deadlines and project progress."
              ghLink="https://github.com/Pathum-SC12402/Task-Tacker-Frontend-React-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrimeLand}
              isBlog={false}
              title="PrimeLand"
              description="A dynamic website developed using PHP and MySQL to display information about lands available for sale across different districts. The platform features a user-friendly interface built with HTML, CSS, and JavaScript, allowing users to easily browse, search, and view land listings."
              ghLink="https://github.com/Pathum-SC12402/PrimeLand-Sales"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PCWorld}
              isBlog={false}
              title="PCWorld"
              description="A desktop application built with C# to manage inventory and sales details of PC monitors in a computer monitor shop. The system streamlines product tracking, availability, and pricing, helping store owners efficiently manage their monitor listings and sales records."
              ghLink="https://github.com/Pathum-SC12402/PC-Monitor-Data-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
