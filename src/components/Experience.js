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
              details: [
                "Developed a scalable cryptocurrency trading platform with an intuitive user interface and admin panel using React.js and Redux Toolkit.",
                "Implemented real-time transaction updates, optimized API interactions, and enhanced performance through code splitting and lazy loading.",
              ],
            },
            {
              details: [
                "Built an admin interface for a real-time football prediction platform integrating live match data via WebSockets.",
                "Implemented persistent filters, debounced search, and dynamic pagination to optimize API calls and improve user experience.",
              ],
            },
            {
              details: [
                "Developed a responsive admin and user interface for a financial trading platform with dynamic dashboards and modular components.",
                "Created reusable column configurations and expanded row components for data tables, reducing code duplication and improving maintainability.",
              ],
            },
            {
              details: [
                "Developed an admin panel for a fantasy gaming application where users can create teams and participate in contests.",
                "Integrated global image modal and optimized navigation logic using React state passing instead of query parameters for efficient data handling.",
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
              <p>Here is an overview of my 1.5 years of experience, highlighting my professional journey and contributions.</p>
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

