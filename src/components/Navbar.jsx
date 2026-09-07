import React from "react"

const Navbar = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button type="button" onClick={() => scrollToSection("work")}>Projects</button>
            <button type="button" onClick={() => scrollToSection("about")}>About</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
