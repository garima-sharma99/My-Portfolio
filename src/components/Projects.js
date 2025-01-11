import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vrfxLogo from "../assets/img/vrfxLogo.png";
import sportsDivinerLogo from "../assets/img/sportsDivinerLogo.png";
import usdtConvertLogo from "../assets/img/usdtConvertLogo.ico";
import rcbproj from "../assets/img/rcb-proj.png";
import sportsDiviner from "../assets/img/sportsDiviner.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VR-FX",
      description: "Crypto Currency Conversion Platform",
      imgUrl: rcbproj,
      logoUrl: vrfxLogo,
      url: "https://vrfxbroker.com/",
    },
    {
      title: "Sports Diviner-Admin",
      description: "Football Prediction Platform",
      imgUrl: sportsDiviner,
      logoUrl: sportsDivinerLogo,
      url:'http://103.175.163.162:5556/',
    },
    {
      title: "USDT Conversion",
      description: "USDT Conversion Platform",
      imgUrl: rcbproj,
      logoUrl: usdtConvertLogo,
      url:'http://103.175.163.162:3003/',
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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" disabled>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" disabled>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
