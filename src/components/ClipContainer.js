import React, { useState } from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Clip from "./Clip"

const ClipContainer = props => {
  const [showing, setShowing] = useState(false)
  const [index, setIndex] = useState(
    Math.floor(Math.random() * data.clips.length)
  )

  function updateDiv() {
    setIndex(Math.floor(Math.random() * data.clips.length))
  }

  return (
    <Fade>
      <div>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            if (!showing) setShowing(true)
            else updateDiv()
          }}
        >
          Click to View a Random Unrelated Clip
        </button>
        {showing && (
          <div
            id="video-clip"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <Clip url={data.clips[index]}></Clip>
          </div>
        )}
      </div>
    </Fade>
  )
}

export default ClipContainer
