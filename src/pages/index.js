import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import {link} from '../components/layout.module.css'

const IndexPage = ({data}) => {
  return (
    <>
    <Layout pageTitle="sean mcleaish">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    {/*  <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/kitten.jpg"
      /> */}
      {
        data.allMarkdownRemark.nodes.map(node => (
          <article key={node.id}>
            <h2 className={link}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }

    </Layout>
    
    </>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="home" />

export default IndexPage
