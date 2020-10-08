import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhoPage = () => (
  <Layout>
    <SEO title="Qui suis-je" />
    <div className="container">
      <h1 className="text-sunset-gradient text-title">
        Alexandre Haas, étudiant en mastère ingénierie web & mobile.
      </h1>
      <p className="mt-3">Site en développement...</p>
    </div>
  </Layout>
)

export default WhoPage
