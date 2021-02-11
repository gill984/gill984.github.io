import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Clip from "./Clip"

const ClipContainer = props => {
  return (
    <Fade>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Clips
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {data.clips.map(clip => (
            <Clip url={clip}></Clip>
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default ClipContainer
