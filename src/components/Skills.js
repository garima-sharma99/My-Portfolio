import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import ReactLogo from "../assets/img/ReactLogo.png"
import JavaScriptLogo from "../assets/img/JavaScriptLogo.png"
import htmlLogo from "../assets/img/htmlLogo.png"
import cssLogo from "../assets/img/cssLogo.jpg"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>Here is a collection of the technical and creative skills I've developed over the course of my career. These skills have enabled me to create impactful web applications, intuitive user interfaces, and dynamic experiences.</p>

                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={JavaScriptLogo} alt="meter" className="img-fluid border border-0 rounded-circle" />
                    <h5>JavaScript</h5>
                  </div>

                  <div className="item">
                    <img src={ReactLogo} alt="meter" className="img-fluid border border-0 rounded-circle" />
                    <h5>ReactJs</h5>
                  </div>

                  <div className="item">
                    <img src={cssLogo} alt="meter" className="img-fluid border border-0 rounded-circle" />
                    <h5>Css</h5>
                  </div>

                  <div className="item">
                    <img src={htmlLogo} alt="meter" className="img-fluid border border-0 rounded-circle" />
                    <h5>Html</h5>
                  </div>
                  {/* <div className="item">
                  <img src={meter1} alt="meter" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter" />
                  <h5>ExpressJs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter" />
                  <h5>MongoDB</h5>
                </div> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bgIma" />
      </section>
      <hr />
    </>
  )
}
