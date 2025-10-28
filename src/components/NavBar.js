import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/github.svg'
import { HashLink } from 'react-router-hash-link';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="border rounded-circle img-fluid bg-secondary" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link mx-lg-2 fs-3' : 'navbar-link mx-lg-2'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link mx-lg-2 fs-3' : 'navbar-link mx-lg-2'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link mx-lg-2 fs-3' : 'navbar-link mx-lg-2'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link mx-lg-2 fs-3' : 'navbar-link mx-lg-2'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <div className="navbar-text d-flex flex-column flex-lg-row align-items-center me-lg-auto">
              <div className="social-icon d-flex justify-content-center mb-3 mb-lg-0">
                <a target="_blank" href="https://www.linkedin.com/in/garima-sharma-215350249/" rel="noreferrer" className="me-2"><img className="img-fluid" src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://github.com/garima-sharma99" rel="noreferrer" className="me-2"><img className="img-fluid" src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#connect' className="ms-0 ms-lg-3">
                <button className="vvd btn"><span>Contact</span></button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img className="background-image-right w-100" src={colorSharp2} alt="Background" />
    </>
  )
}
