import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, logoUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a target="_blank" href={url} rel="noreferrer" className="text-white">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <p>{title}</p>
        <div className="proj-txtx">
          <img className="img-fluid w-25 border border-0 rounded-circle" src={logoUrl} alt="" />
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
