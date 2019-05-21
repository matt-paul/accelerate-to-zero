import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import text from "../text"
// import Form from "../components/form"

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
      <h2>What do we offer developers?</h2>
      <p>
        A single place to consume the data you are looking for on the
        environmental credentials of companies
      </p>
      <p>A modern graphql api to reduce network load on your application.</p>
      <h2>What do we offer certifcate authorities?</h2>
      <p>Single place to find data - easier for developers to use your data</p>
      <p>
        Spread the word - allow your certificates and work to reach more people
      </p>
      <p>
        Work with you to save you money - you don't need a fancy api of your own
        - give us a csv and we will make it easily available
      </p>
      <h2>Developers - Getting started</h2>
      <p>Graphql playground available at ......</p>
      <p>Api at api.acceleratetozero.com</p>
      <p>
        Contribute to this project at
        www.github.com/matt-paul/accelerate-to-zero
      </p>

      {/* <Form /> */}
      <p>Get in touch:</p>

      <address>
        <a href="mailto:hello@acceleratetozero.com">
          hello@acceleratetozero.com
        </a>
        <br />
      </address>
    </ContentContainer>
  </Layout>
)

export default HomePage
