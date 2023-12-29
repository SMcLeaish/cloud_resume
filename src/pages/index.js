import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <>
    <Layout pageTitle="sean mcleaish">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    {/*  <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/kitten.jpg"
      /> */}
    </Layout>
    </>
  )
}

export const Head = () => <Seo title="home" />

export default IndexPage
