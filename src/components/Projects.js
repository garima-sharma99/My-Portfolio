import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vrfxLogo from "../assets/img/vrfxLogo.png";
import sportsDivinerLogo from "../assets/img/sportsDivinerLogo.png";
import usdtConvertLogo from "../assets/img/usdtConvertLogo.ico";
import rcbproj from "../assets/img/rcb-proj.png";
import sportsDiviner from "../assets/img/sportsDiviner.png";
import myChampLogo from "../assets/img/MyChamp.png";
import myChampBg from "../assets/img/MyChampBg.jpg"
import aizuLogo from "../assets/img/aizuLogo.png";
import aizuBg from "../assets/img/aizuBg.png";
import superstarLogo from "../assets/img/superstarLogo.png";
import superstarBg from "../assets/img/superstarBg.jpg";
import quickiesLogo from "../assets/img/quickiesLogo.png";
import quickiesBg from "../assets/img/quickiesBg.jpg";
import ludoLogo from "../assets/img/ludoLogo.png";
import ludoBg from "../assets/img/ludoBg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import sparkNetBg from "../assets/img/sparkNetBg.png";
import sparkNetLogo from "../assets/img/sparkNetLogo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "AIZU Exchange",
      description: "Crypto Exchange Admin Platform",
      imgUrl: aizuBg,
      logoUrl: aizuLogo,
    },
    {
      title: "Superstar Admin",
      description: "Contest Management & Analytics Platform",
      imgUrl: superstarBg,
      logoUrl: superstarLogo,
    },
    {
      title: "Quickies Dating Admin",
      description: "Dating App Admin Panel for User & Chat Moderation",
      imgUrl: quickiesBg,
      logoUrl: quickiesLogo,
    },

  ];
  const projectsTab2 = [

    {
      title: "Ludo Live Game Monitoring",
      description: "Real-Time Game Visualization Dashboard",
      imgUrl: ludoBg,
      logoUrl: ludoLogo,
    },
    {
      title: "Spark Net Global",
      description: "MLM Platform with Wallet & Referral Management",
      imgUrl: sparkNetBg,
      logoUrl: sparkNetLogo,
    },
    {
      title: "Sports Diviner",
      description: "Fantasy Sports Admin & Data Visualization Platform",
      imgUrl: sportsDiviner,
      logoUrl: sportsDivinerLogo,
    },
   
  ];
  const projectsTab3 = [
    {
      title: "My Champ 11",
      description: "Fantasy Gaming Admin Panel with Live Analytics",
      imgUrl: myChampBg,
      logoUrl: myChampLogo,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>During my time at <b className="text-info">Appinop Technologies</b>, I’ve worked on impactful projects that showcase my expertise in ReactJs framework, and front-end development techniques. Here are some key projects highlighting my contributions to scalable, user-focused solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="btn">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="btn">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="btn">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsTab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                         <Row>
                          {
                            projectsTab3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgIma" />
    </section>
  )
}
