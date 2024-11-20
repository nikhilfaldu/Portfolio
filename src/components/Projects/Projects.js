import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dart from "../../Assets/Projects/dart_pr.png";
import portfolio from "../../Assets/Projects/portfolt_pr.png";
import foodorder from "../../Assets/Projects/foodorder_pr.png";
import kkgh from "../../Assets/Projects/kkgh_pr.png";
import quiz from "../../Assets/Projects/quiz_pr.png";
import uiuxproject from "../../Assets/Projects/uiux_pr.png";
import carrent from "../../Assets/Projects/carrent_pr.png"; 
import srs from "../../Assets/Projects/srs_pr.png";
import minded from "../../Assets/Projects/mind_pr.png";

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
              imgPath={[portfolio]}
              isBlog={false}
              title={
                <>
                  Portfolio &nbsp;WebApplication
                  <br />
                  <br/>
                </>
              }
              description="Explore my personalized portfolio crafted with React JS, showcasing my projects, skills, and experiences. Engage with dynamic design, seamless navigation, and interactive elements, reflecting my dedication to innovation and creativity in the digital realm. Dive into a responsive and visually appealing interface, tailored to provide an immersive browsing experience."
              ghLink="https://github.com/nikhilfaldu/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kkgh}
              isBlog={false}
              title={
                <>
                  Kingkhush Guest-House WebApplication
                  <br />
                  <br/>
                </>
              }
              description="KingKhush Guest House is a modern, responsive website built with React.js, Node.js, Express.js, and MongoDB. Designed with engaging UI/UX, it showcases the guest house’s amenities, rooms, gallery, and contact information. Featuring custom CSS, animations, and responsive design, it ensures seamless navigation across devices."
              ghLink="https://github.com/nikhilfaldu/Innobyte_Intership"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title={
                <>
                  QuizCodey WebApplication
                  <br />
                  <br/>
                </>
              }
              description="QuizCodey is an innovative web application developed with React.js, Node.js, Express.js, and MongoDB. Designed for coding enthusiasts, it features diverse quizzes, real-time ranking, and seamless management tools. Students can access exams, result, schedules effortlessly, while teachers can efficiently manage exams, results, schedules, and meetings."
              ghLink="https://github.com/nikhilfaldu/Quiz_WebApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodorder}
              isBlog={false}
              title={
                <>
                  Food-Order &nbsp;Webapplication
                  <br />
                  <br/>
                </>
              }
              description="The Food Order Web Application, built with PHP, MySQL, HTML, and CSS, streamlines online food ordering. Visitors can browse categories, explore food items, and place orders effortlessly. The admin interface enables efficient management of admins, categories, food items, and tracking orders and deliveries, providing a seamless experience for both users and administrators."
              ghLink="https://github.com/nikhilfaldu/Food_Order-Webapplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dart}
              isBlog={false}
              title={
                <>
                  Brand Ecommerce App
                  <br />
                  <br/>
                </>
              }
              description="The Brand Ecommerce App is an Android application developed using Dart and Flutter in Android Studio. Designed for seamless shopping, it allows users to browse and purchase branded items like shoes, jackets, watches, wallets, and clothes. With features like order tracking, color and size customization, and an intuitive interface, it ensures a convenient shopping experience."
              ghLink="https://github.com/nikhilfaldu/flutter-Project"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uiuxproject}
              isBlog={false}
              title={
                <>
                  LifeBank Crowfunding UI/UX
                  <br />
                  <br/>
                </>
              }
              description="LifeBank Crowdfunding UI/UX is a visually appealing and user-centric design created using Figma. This UI/UX design focuses on providing an intuitive and engaging experience for users involved in crowdfunding activities. The layout is optimized for ease of navigation, ensuring a smooth and seamless interaction for users contributing to or managing crowdfunding campaigns."
              ghLink="https://github.com/nikhilfaldu/lifebank-crowdfunding-UI-UX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minded}
              isBlog={false}
              title={
                <>
                  Mind Equcation Webdesign
                  <br />
                  <br/>
                </>
              }
              description="MindEducation Web Design is a responsive and user-friendly design created using HTML, CSS, and Bootstrap for an online and offline tuition institute. The design aims to provide an intuitive platform for students and teachers, showcasing available courses, schedules, and registration details. It ensures easy navigation and a seamless user experience, making it an ideal solution."
              ghLink="https://github.com/nikhilfaldu/Mind-Equcation-Webdesign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrent}
              isBlog={false}
              title={
                <>
                  Car Rent Webdesign
                  <br />
                  <br/>
                </>
              }
              description="The Car Rent Web Design, crafted with HTML, CSS, and Bootstrap, offers a sleek and responsive interface. Designed for optimal user experience, it enables effortless navigation and showcases vehicle rental options with a modern and visually appealing layout. The use of Bootstrap ensures adaptability across devices, making it suitable for both desktop and mobile users."
              ghLink="https://github.com/nikhilfaldu/car_rental-Webdesign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srs}
              isBlog={false}
              title={
                <>
                  Parts Mangement System Docs
                  <br />
                  <br/>
                </>
              }
              description="The Parts Management System Documentation is a comprehensive Software Requirements Specification (SRS) document for an eCommerce application focused on the manufacturing, sale, and purchase of parts. This document outlines the app's design, logic, and data structure, detailing the required data storage and management system. It includes flowcharts of data structure and apis."
              ghLink="https://github.com/nikhilfaldu/parts-mangement-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
