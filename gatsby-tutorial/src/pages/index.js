import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Kevin. A full stack developer living in Toronto.</h2>
      <p>
        <Link to="contact">Want to work with me? Reach Out!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
