import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Work = () => {
  return (
    <Fade bottom cascade>
      <div className="section" id="work">
        <div className="container">
          <div className="work-wrapper">
            <Fade bottom>
              <h1>Projects</h1>
            </Fade>

            <div className="grid">
                {data.projects.map(project => (
                  <Card
                    key={project.id}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                  ></Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Work
