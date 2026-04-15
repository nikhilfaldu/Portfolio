import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { BsGlobe, BsShop, BsBook } from "react-icons/bs";
import { MdOutlineLocalHospital, MdOutlineRealEstateAgent, MdOutlineAcUnit, MdOutlineSchool } from "react-icons/md";
import { FaChessBoard, FaChartLine, FaUsers, FaBoxes } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";

// Old project images
import portfolio from "../../Assets/Projects/portfolt_pr.png";
import kkgh from "../../Assets/Projects/kkgh_pr.png";
import quiz from "../../Assets/Projects/quiz_pr.png";
import foodorder from "../../Assets/Projects/foodorder_pr.png";
import dart from "../../Assets/Projects/dart_pr.png";
import uiuxproject from "../../Assets/Projects/uiux_pr.png";
import carrent from "../../Assets/Projects/carrent_pr.png";
import minded from "../../Assets/Projects/mind_pr.png";
import srs from "../../Assets/Projects/srs_pr.png";

// New project images
import trividhyaErp from "../../Assets/Projects/trivhdya-erp.png";
import lynxCrm from "../../Assets/Projects/lunx crm.png";
import trvHms from "../../Assets/Projects/TRV HMS.png";
import rynoCms from "../../Assets/Projects/rynocms.png";
import vaultLedger from "../../Assets/Projects/valutleagder.png";
import chess from "../../Assets/Projects/chess.png";
import nifty from "../../Assets/Projects/nifty-staddle.png";
import ecommerce from "../../Assets/Projects/e cormace.png";

function ProjectSection({ icon, title, desc, color }) {
  return (
    <Col md={4} className="project-card">
      <div className="project-card-new">
        <div className="project-card-icon" style={{ background: `${color}18`, color: color }}>
          {icon}
        </div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{desc}</p>
      </div>
    </Col>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>

        {/* Section 1: Trividhya Innovation */}
        <h1 className="project-heading">
          <strong className="purple">Trividhya</strong> Innovation Projects
        </h1>
        <p style={{ color: "#b0a8c0", textAlign: "center", marginBottom: "30px" }}>
          Enterprise-grade products built at Trividhya Innovation Pvt. Ltd.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trividhyaErp}
              isBlog={false}
              title="Trividhya ERP"
              description="Complete school management system with admin panel for staff, and mobile apps for parents & students. Features auto timetable, attendance, exams, leaves, subjects, homework, hostel & library management, food menu, and an advanced AI agent that minimizes manual data entry."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trvHms}
              isBlog={false}
              title="TRV Hospital Management"
              description="Advanced hospital management system with insurance policy management, nurse & doctor scheduling, patient data tracking, billing, and comprehensive medical records management for streamlined healthcare operations."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lynxCrm}
              isBlog={false}
              title="Lynx CRM"
              description="Large-scale CRM that fetches leads from IndiaMART, Meta platforms, TradeIndia, 99acres & more. Features customer inventory management, account management, pipeline tracking, and advanced lead nurturing workflows."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="TRV E-Commerce"
              description="Full-featured e-store platform enabling shops and businesses to set up their own online store, sell products, and manage their complete e-commerce operations with ease."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rynoCms}
              isBlog={false}
              title="Ryno CMS"
              description="Content management system built for managing customer data and work-related information. Streamlines business workflows with organized data tracking and client management capabilities."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaultLedger}
              isBlog={false}
              title="VaultLedger – Account Management System"
              description="Mobile accounting software that enables customers to track their business data with simple on-hand movements. Features automated data transaction calculations for simple and efficient business tracking."
            />
          </Col>
        </Row>

        {/* Section 2: My Projects */}
        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Service <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "#b0a8c0", textAlign: "center", marginBottom: "30px" }}>
          Projects built during my professional roles at various companies
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <ProjectSection
            icon={<BsGlobe size={28} />}
            title="Arbo Tracking"
            color="#c770f0"
            desc="Tracking and data management system for districts like Asmali, Simla, Prayagraj, Kumbalgarh. Track, book, and manage data with guide and student management features for comprehensive district-level operations."
          />
          <ProjectSection
            icon={<MdOutlineAcUnit size={28} />}
            title="Uniflow AC Services"
            color="#be6adf"
            desc="Simple and efficient project built for a small AC repairing business. Manages client records, service history, and streamlines day-to-day operations for the service provider."
          />
          <ProjectSection
            icon={<MdOutlineRealEstateAgent size={28} />}
            title="RK Real Estate"
            color="#c770f0"
            desc="Real estate building management system handling vendors, subscriber management, visitor & vehicle management, and solving office & occupant data challenges across all properties."
          />
          <ProjectSection
            icon={<MdOutlineLocalHospital size={28} />}
            title="Hospital Management System"
            color="#be6adf"
            desc="Comprehensive hospital management solution for managing patient records, doctor schedules, medical reports, billing, and overall healthcare facility operations."
          />
          <ProjectSection
            icon={<BsBook size={28} />}
            title="iCampus ERP"
            color="#c770f0"
            desc="Campus-level ERP system for educational institutions. Manages reports, exams, staff data, conduct tracking, and all academic operations for the iCampus company."
          />
        </Row>

        {/* Section 3: My Recent Projects */}
        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "#b0a8c0", textAlign: "center", marginBottom: "30px" }}>
          Latest projects I've been working on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Game"
              description="Interactive chess game built with modern web technologies. Play against AI or friends with a clean, responsive interface and real-time move validation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nifty}
              isBlog={false}
              title="Nifty NSE/BSE Straddle"
              description="Stock market analysis tool for Nifty that builds custom indicators and provides actionable investment & selling signals. Helps traders make data-driven decisions with helpful indicator points."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio WebApplication"
              description="Explore my personalized portfolio crafted with React JS, showcasing my projects, skills, and experiences. Engage with dynamic design, seamless navigation, and interactive elements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kkgh}
              isBlog={false}
              title="Kingkhush Guest-House WebApplication"
              description="KingKhush Guest House is a modern, responsive website built with React.js, Node.js, Express.js, and MongoDB. Designed with engaging UI/UX, it showcases the guest house's amenities, rooms, gallery, and contact information."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="QuizCodey WebApplication"
              description="QuizCodey is an innovative web application developed with React.js, Node.js, Express.js, and MongoDB. Designed for coding enthusiasts, it features diverse quizzes, real-time ranking, and seamless management tools."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodorder}
              isBlog={false}
              title="Food-Order WebApplication"
              description="The Food Order Web Application, built with PHP, MySQL, HTML, and CSS, streamlines online food ordering. Visitors can browse categories, explore food items, and place orders effortlessly."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dart}
              isBlog={false}
              title="Brand Ecommerce App"
              description="The Brand Ecommerce App is an Android application developed using Dart and Flutter in Android Studio. Designed for seamless shopping with order tracking and customization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uiuxproject}
              isBlog={false}
              title="LifeBank Crowdfunding UI/UX"
              description="LifeBank Crowdfunding UI/UX is a visually appealing and user-centric design created using Figma. This design focuses on providing an intuitive and engaging experience for crowdfunding activities."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minded}
              isBlog={false}
              title="Mind Education Webdesign"
              description="MindEducation Web Design is a responsive and user-friendly design created using HTML, CSS, and Bootstrap for an online and offline tuition institute."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrent}
              isBlog={false}
              title="Car Rent Webdesign"
              description="The Car Rent Web Design, crafted with HTML, CSS, and Bootstrap, offers a sleek and responsive interface for vehicle rental options with a modern and visually appealing layout."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srs}
              isBlog={false}
              title="Parts Management System Docs"
              description="Comprehensive Software Requirements Specification (SRS) document for an eCommerce application focused on the manufacturing, sale, and purchase of parts."
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
