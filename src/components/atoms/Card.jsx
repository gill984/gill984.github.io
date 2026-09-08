import React from "react"

const Card = ({ heading, paragraph, imgUrl, imgWebp, imgAvif, projectLink }) => {
  return (
    <a
      className="card"
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <picture className="card-image-wrapper">
        {imgAvif && <source srcSet={imgAvif} type="image/avif" />}
        {imgWebp && <source srcSet={imgWebp} type="image/webp" />}
        <img
          className="card-image"
          src={imgUrl}
          alt={heading}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="content">
        <h2 className="header">{heading}</h2>
        <p className="text">{paragraph}</p>
      </div>
    </a>
  )
}

export default Card
