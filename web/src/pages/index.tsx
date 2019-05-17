import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import text from "../text"

const ContentContainer = ({ children }: { children: any }) => (
  <div>{children}</div>
)

const HomePage = () => (
  <Layout>
    <SEO
      title={text.home.seo.title}
      description={text.home.seo.description}
      meta={[]}
      keywords={[]}
    />

    <ContentContainer>
      <h1>{text.home.pageHeading}</h1>
      <p>{text.home.main.p1}</p>
      <p>{text.home.main.p2}</p>
    </ContentContainer>
  </Layout>
)

export default HomePage
