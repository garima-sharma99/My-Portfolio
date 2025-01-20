import React, { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import appinopLogo from '../assets/img/appinopLogo.jpg'
import geevLogo from '../assets/img/geevLogo.png'
import spvLogo from '../assets/img/spvLogo.png'

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  const experiences = [
    {
      company: "Appinop Technologies, Jaipur",
      logo: appinopLogo,
      roles: [
        {
          title: "Frontend Developer",
          period: "May 2024 – Present",
          projects: [
            {
              name: "Carnival Corporate Token (Admin)",
              details: [
                "Developed a responsive admin panel using React.js to manage corporate tokens efficiently.",
                "Implemented state management with Redux-Toolkit to ensure a smooth user experience.",
                "Worked with API integrations for dynamic data handling, improving performance by 20%.",
              ],
            },
            {
              name: "Crypto India (Admin)",
              details: [
                "Led the front-end development of an admin interface for a cryptocurrency platform.",
                "Collaborated with the backend team to integrate and secure APIs for cryptocurrency transactions.",
                "Ensured cross-browser compatibility and mobile responsiveness for the admin dashboard.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Appinop Technologies, Jaipur",
      logo: appinopLogo,
      roles: [
        {
          title: "ReactJs Developer Intern",
          period: "Jan 2024 – Apr 2024",
          details: [
            "Collaborated with senior developers to create dynamic web applications, ensuring high performance and scalability.",
            "Integrated RESTful APIs for seamless data fetching and optimized rendering processes.",
            "Utilized React Hooks and Redux-Toolkit for state management and improved application performance.",
            "Implemented reusable components and styled layouts using CSS, Bootstrap.",
            "Conducted debugging and performance optimization to enhance the overall user experience.",
          ],
        },
      ],
    },
    {
      company: "Geev Enterprise, Jaipur",
      logo: geevLogo,
      roles: [
        {
          title: "Business Manager",
          period: "Jul 2022 – Sept 2023",
          details: [
            "Managed website operations and digital marketing strategies to increase brand visibility by 35%.",
            "Led the graphic design team and spearheaded the digital transformation of key projects.",
          ],
        },
      ],
    },
    {
      company: "Solar Power Solutions, Jaipur",
      logo: spvLogo,
      roles: [
        {
          title: "Technical Assistant",
          period: "Dec 2020 – Jul 2022",
          details: [
            "Designed and executed solar power projects, managing a team responsible for installations.",
            "Provided customer support and managed annual maintenance contracts (AMC) for long-term partnerships.",
          ],
        },
      ],
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 900, min: 250 }, items: 1 },
  };

  const handleCardClick = (experience) => {
    setCurrentExperience(experience);
    setShowModal(true);
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <div className="experience-bx wow zoomIn">
              <h2>Experience</h2>
              <p>Here is an overview of my 4 years of experience, highlighting my professional journey and contributions.</p>
              <Row>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme experience-slider"
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                >
                  {experiences.map((exp, index) => (
                    <div
                      className="experience-card mx-2 shadow"
                      key={index}
                      onClick={() => handleCardClick(exp)}
                    >
                      <div className="experience-card-inner">
                        <h3>{exp.company}</h3>
                        <p>{exp.roles[0].period}</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-nowrap">{exp.roles[0].title}</p>
                          <span><img src={exp.logo} className="img-fluid ms-5 rounded-circle w-25" alt="companyLogo" /></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentExperience?.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentExperience?.roles.map((role, index) => (
            <div key={index}>
              {role.projects && role.projects.map((project, idx) => (
                <div key={idx}>
                  <h4>{project.name}</h4>
                  <ul>
                    {project.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {role.details && (
                <ul>
                  {role.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Modal.Body>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="bgIma" />
    </section>
  );
};

export default Experience;

