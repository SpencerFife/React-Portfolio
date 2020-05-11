import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import projects from "../projects";
import "../styles/Header.css";
import "../styles/Card.css";

function Portfolio() {
  return (
    <>
      <Header message={"My Portfolio"} />
      <Wrapper>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="card">
                <h1>{project.name}</h1>
                <div className="img-container">
                  <img
                    alt="project"
                    className="img-card-top"
                    src={project.image}
                  />
                </div>
                <div className="content">
                  <p>{project.info}</p>

                  <a href={project.link}>Deployed Link</a>
                  <br></br>
                  <a href={project.github}>Git Hub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default Portfolio;
