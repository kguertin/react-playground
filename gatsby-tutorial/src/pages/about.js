import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Here is something about me.</p>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default AboutPage
