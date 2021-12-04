import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Kevin. A full stack developer living in Toronto.</h2>
      <p>
        <Link to="contact">Want to work with me? Reach Out!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
