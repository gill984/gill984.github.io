import React, { useEffect, useState } from "react"
import Layout from "./components/layout"
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Footer from "./components/Footer"

const App = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let isMounted = true

    const reveal = () => {
      if (isMounted) setIsReady(true)
    }

    const id = window.setTimeout(reveal, 50)

    return () => {
      isMounted = false
      window.clearTimeout(id)
    }
  }, [])

  return (
    <div className={`app-shell${isReady ? " app-shell--ready" : ""}`}>
      <Layout>
        <Header />
        <Work />
        <About />
        <Footer />
      </Layout>
    </div>
  )
}

export default App
