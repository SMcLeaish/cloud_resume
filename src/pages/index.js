import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import {link} from '../components/layout.module.css'
import {postcontainer} from '../components/post.module.css'
const IndexPage = ({data}) => {
  return (
    <>
    <Layout pageTitle="sean mcleaish"
    headerContent={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        src="../images/selfie.jpeg" 
        alt="sean mcleaish"
        style={{
          borderRadius: '50%', 
          width: '30%', 
          height: '30%', 
          marginRight: '1rem', 
        }}
        imgStyle={{ borderRadius: '50%' }}
      />
      <div>
        <h1>sean mcleaish</h1>
        <p>I'm a soldier figuring out how to be a software developer. This blog is to share what I'm learning along the way.</p>
      </div>
    </div>
  }    >
          {
        data.allMarkdownRemark.nodes.map(node => (
        <Link to={`/blog/${node.frontmatter.slug}`}>
          <article key={node.id} className={postcontainer}>
            <h2 className={link}>
                {node.frontmatter.title}
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        </Link>
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
