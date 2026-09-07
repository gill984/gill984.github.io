import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <a
      className="card"
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="card-image"
        src={imgUrl}
        alt={heading}
        loading="lazy"
        decoding="async"
      />
      <div className="content">
        <h2 className="header">{heading}</h2>
        <p className="text">{paragraph}</p>
      </div>
    </a>
  )
}

export default Card
