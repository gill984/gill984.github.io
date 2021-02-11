import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <Fade>
      <div className="section" id="work">
        <div className="container">
          <div className="work-wrapper">
            <Fade bottom>
              <h1>Projects</h1>
            </Fade>

            <div className="grid">
              <Fade bottom cascade>
                {data.projects.map(project => (
                  <Card
                    key={project.id}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                  ></Card>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Work
