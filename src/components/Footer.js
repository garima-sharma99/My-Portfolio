import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from '../assets/img/github.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a target="_blank" href="https://www.linkedin.com/in/garima-sharma-215350249/" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://github.com/garima-sharma99" rel="noreferrer"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright &copy; 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
