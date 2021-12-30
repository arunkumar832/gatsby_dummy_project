import * as React from "react"
import Body from "../components/Body"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bottom from "../components/Bottom"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Body />
    <Bottom />
  </Layout>
)

export default IndexPage
