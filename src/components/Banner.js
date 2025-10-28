import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  // const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = useMemo(() => ["ReactJs Developer", "Software Developer", "Frontend Developer"], []);
  const period = 500;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      // setIndex(prevIndex => prevIndex + 1);
    }
  }, [loopNum, text, isDeleting, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Garima,`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                    <div className="objective">

                      <ul className='ms-4'>
                        <li className="my-1">
                          Results-driven <u>React.js Developer</u> with 1+ years of experience building scalable, high-performance web applications.
                        </li>
                        <li className="my-1">
                          Proficient in <u>component-based architecture</u>, <u>API integration</u>, and <u>user experience optimization</u>.
                        </li>
                        <li className="my-1">
                          Skilled in implementing <u>real-time features</u>, <u>dynamic data tables</u>, and <u>state management</u> using Redux Toolkit.
                        </li>
                        <li className="my-1">
                          Experienced in <u>collaborative development</u>, delivering <u>enterprise-grade</u> and <u>responsive web solutions</u>.
                        </li>
                      </ul>

                    </div>

                    <a
                      href="https://wa.me/917742840588?text=Hi%20Garima,%20I%20visited%20your%20portfolio%20and%20want%20to%20connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="vvd"><span>Let’s Connect </span><ArrowRightCircle size={25} /></button>
                    </a>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
    </>
  )
}
