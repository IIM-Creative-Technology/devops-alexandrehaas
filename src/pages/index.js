import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Développeur web" />
    <div className="container">
      <h1 className="text-sunset-gradient text-title">
        Freelance, développeur web front-end junior.
      </h1>
      <p className="mt-3">Site en développement...</p>
      <p className="mt-3">Test CI/CD 1</p>
    </div>
  </Layout>
)

export default IndexPage
