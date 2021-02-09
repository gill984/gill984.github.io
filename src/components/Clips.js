import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Clips = props => {
  return (
    <Fade>
      <iframe
        src={props.url}
        frameborder="0"
        width="640"
        height="360"
        padding={10}
        allowFullScreen
      ></iframe>
    </Fade>
  )
}

export default Clips
