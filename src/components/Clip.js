import React from "react"
import Fade from "react-reveal/Fade"

const Clip = props => {
  return (
    <Fade>
      <div
        style={{
          padding: 2,
        }}
      >
        <iframe
          src={props.url}
          frameborder="0"
          width="800"
          height="450"
          padding={10}
          allowFullScreen
        ></iframe>
      </div>
    </Fade>
  )
}

export default Clip
