import React from "react"
import Fade from "react-reveal/Fade"

const Clip = props => {
  return (
    <Fade>
      <iframe
        src={props.url}
        frameborder="0"
        width="800"
        height="450"
        padding={10}
        allowFullScreen
      ></iframe>
    </Fade>
  )
}

export default Clip
