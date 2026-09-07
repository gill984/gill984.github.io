import React from "react"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <div className="heading-wrapper">
            <h1>{data.headerTagline[0]}</h1>
            <h1>{" "}{data.headerTagline[1]}</h1>
            <h1>{" "}{data.headerTagline[2]}</h1>
          </div>

          <h2>
            Hi, I'm {data.name}{" "}
            <span role="img" aria-label="Emoji">
              👋
            </span>
          </h2>

          <p>{data.headerParagraph}</p>

          <div className="cta-group">
            <a
              href={"https://www.linkedin.com/in/michael-gill-76b41021/"}
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect With Me
            </a>
            <a
              href={`${data.resume ? data.resume : ""}`}
              className="primary-btn"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
