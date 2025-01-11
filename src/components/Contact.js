import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Information</h2>
                  <div className="contact-details">
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                      <i className="fa-solid fa-square-phone fs-2"></i>
                      <span className="ms-3">+91-7742840588</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                      <i className="fa-solid fa-at fs-2"></i>
                      <a className="ms-3" href="mailto:gs5034746@gmail.com">gs5034746@gmail.com</a>
                    </div>
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                      <i className="fa-solid fa-location-dot fs-2"></i>
                      <span className="ms-3">Jaipur, Rajasthan, India</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                      <i className="fa-brands fa-linkedin fs-2"></i>
                      <a className="ms-3" href="https://linkedin.com/in/garima-sharma-215350249" target="_blank" rel="noreferrer">
                        linkedin.com/in/garima-sharma-215350249
                      </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong><i className="fa-brands fa-github fs-2"></i></strong>
                      <a className="ms-3" href="https://github.com/garima-sharma99" target="_blank" rel="noreferrer">
                        github.com/garima
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
