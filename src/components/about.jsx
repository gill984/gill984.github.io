import React from "react"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <h1>Professional Experience</h1>
            <div className="experience-list">
              {data.aboutExperience.map(experience => (
                <section key={experience.company}>
                  <div className="experience-heading">
                    <h2>{experience.company}</h2>
                    <p className="role">{experience.role}</p>
                  </div>
                  <ul>
                    {experience.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
