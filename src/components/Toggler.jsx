import React, { useEffect, useState } from "react"
import { Switch } from "pretty-checkbox-react"

import "@djthoms/pretty-checkbox"

const Toggler = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <label>
      <Switch
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
      />
      {" "}
      Dark mode
    </label>
  )
}

export default Toggler