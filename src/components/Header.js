import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom cascade>
            <a
              href={"https://www.linkedin.com/in/michael-gill-76b41021/"}
              className="primary-btn"
            >
              Connect With Me
            </a>
            <a
              href={`${data.resume ? data.resume : ""}`}
              className="primary-btn"
            >
              My Resume
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
