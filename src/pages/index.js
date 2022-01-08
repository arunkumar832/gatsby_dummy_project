import * as React from "react"
import Body from "../components/Body"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Body />
    <Gallery heading="Our Work at Company"/>
    <Testimonials></Testimonials>
  </Layout>
)

export default IndexPage
