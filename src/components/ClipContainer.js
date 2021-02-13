import React, { useState } from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Clip from "./Clip"

const ClipContainer = props => {
  const [showing, setShowing] = useState(false)

  return (
    <Fade>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setShowing(!showing)
          }}
        >
          Click to View Unrelated Clips
        </h1>
        {showing && (
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
        )}
      </div>
    </Fade>
  )
}

export default ClipContainer
